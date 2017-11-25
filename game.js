/**
 * Created by Administrator on 2017/11/25.
 */
(function (Fly) {
  "use strict";

    function Game(option) {
     this.imgSrcList=['birds', 'land', 'pipe1', 'pipe2', 'sky'];
      this.isStart=true;
      this.lastFrameTime=new Date();
      this.curFrameTime=0;
      this.delta=0;
      this.hero=null;//bird
      this.roles=[];//other
      this.context=Fly.createCV(option.id);
    }
    Game.prototype={
      constructor:Game,
      start:function () {
        var that=this;
          Fly.loadImage(that.imgSrcList,function (imgList) {
            //创建角色
         that.createRoles(imgList);
            //渲染
            that.draw(imgList);
            //绑定事件
            that.bindEvent();
          })
      },
      stop:function () {
          this.isStart=false;
      },
      draw:function (imgList) {
        var context=this.context,that=this;

        (function render() {
          that.curFrameTime = new Date();
          that.delta = that.curFrameTime - that.lastFrameTime;
          that.lastFrameTime = that.curFrameTime;

          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          context.beginPath();
          context.save();

          that.roles.forEach(function (role) {
            role.draw(that.delta);
          });
          that.hero.draw(that.delta);

          //动画停止
          if(that.hero.y<=5 || that.hero.y>=imgList.sky.height-imgList.land.height || context.isPointInPath(that.hero.x,that.hero.y)){
            that.stop();
          }
          context.restore();
          //起止状态
          if(that.isStart){
         requestAnimationFrame(render);
          }
        })();
      },
      createRoles:function (imgList) {
        //创建对象
        //bird对象
        this.hero = new Fly.Bird({
          img: imgList.birds,
          context:this.context
        });
        //其他对象
        var roles=this.roles;
        //sky
        for (var i = 0; i < 2; i++) {
          var sky= new Fly.Sky({
            img:imgList.sky,
            x:imgList.sky.width*i,
            context:this.context
          });
          roles.push(sky);
        }

        //pipe
        for (var i = 0; i < 6; i++) {
          var pipe = new Fly.Pipe({
            imgTop:imgList.pipe2,
            imgBottom:imgList.pipe1,
            x:imgList.pipe1.width*3*i+300,           context:this.context
          });
          roles.push(pipe);
        }
        //land
        for (var i = 0; i < 4; i++) {
          var land = new Fly.Land({
            img:imgList.land,
            x:imgList.land.width*i,
            y:imgList.sky.height-imgList.land.height,
            context:this.context
          });
          roles.push(land);
        }
      },
      bindEvent:function () {
        var that=this;
          that.context.canvas.addEventListener('click',function () {
              that.hero.speed=-0.3;
          })
      }
    }

  Fly.Game=Game;
})(Fly)
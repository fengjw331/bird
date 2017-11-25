/**
 * Created by Administrator on 2017/11/25.
 */
(function (Fly) {
  function Pipe(option) {
    this.imgTop=option.imgTop;
    this.imgBottom=option.imgBottom;
    this.imgW=this.imgTop.width;
    this.imgH=this.imgTop.height;
    this.speed=-0.2;
    this.x=option.x || 0;
    this.topY=0;
    this.bottomY=0;
    this.pipeSpace=150;
    this.initPipeHeight();
  }
  Pipe.prototype={
    constructor:Pipe,
    draw:function (delta) {
        this.x+=this.speed*delta;
      if(this.x<=-this.imgW){
        this.x+=this.imgW*3*6;
        this.initPipeHeight();
      }
      context.drawImage(this.imgTop,this.x,this.topY);
      context.drawImage(this.imgBottom,this.x,this.bottomY);

      //绘制碰撞路径
      context.rect(this.x,this.topY,this.imgW,this.imgH);
      context.rect(this.x,this.bottomY,this.imgW,this.imgH);
      //context.stroke();
    },
    initPipeHeight:function () {
      var pipeTopHeight=Math.random()*200+50;
      this.topY=pipeTopHeight-this.imgH;
      this.bottomY=pipeTopHeight+this.pipeSpace;
    }
  }
  Fly.Pipe=Pipe;
})(Fly)
/**
 * Created by Administrator on 2017/11/24.
 */
(function (Fly) {
  function Bird(option) {
    this.birdImg=option.img;
    this.imgW=this.birdImg.width/3;
    this.imgH=this.birdImg.height;
    this.curAngle=0;
    this.maxAngle=45;
    this.maxSpeed=0.3;
    this.speed=0;
    this.frameIndex=0;
    this.x=100;
    this.y=100;
    this.a=0.0005;
    this.context=option.context;
  }

  Bird.prototype={
    constructor:Bird,
    draw:function (delta) {
      var context=this.context;
      this.curAngle=this.maxAngle/this.maxSpeed*this.speed;
      if(this.curAngle>this.maxAngle){
        this.curAngle=this.maxAngle;
      }else if(this.curAngle<-this.maxAngle){
        this.curAngle=-this.maxAngle;
      }
      context.translate(this.x,this.y);
      context.rotate(Fly.toRadian(this.curAngle));
      context.drawImage(this.birdImg,this.frameIndex++*this.imgW,0,this.imgW,this.imgH,-1/2*this.imgW,-1/2*this.imgH,this.imgW,this.imgH);
      this.frameIndex%=3;
      this.speed+=this.a*delta;
      this.y+=this.speed*delta+1/2*this.a*Math.pow(delta,2);
    }
  }

  Fly.Bird=Bird;
})(Fly)
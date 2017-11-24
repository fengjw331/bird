/**
 * Created by Administrator on 2017/11/24.
 */
(function (Fly) {
  function bird(option) {
    this.birdImg=option.img;
    this.imgW=this.birdImg.width/3;
    this.imgH=this.birdImg.height;
    this.curAngle=0;
    this.maxAngle=45;
    this.maxSpeed=0.3;
    this.speed=0;
    this.frameIndex=0;
    this.y=100;
    this.a=0.0005;
  }
  bird.prototype={
    constructor:bird,
    draw:function (delta) {
      curAngle=maxAngle/maxSpeed*speed;
      if(curAngle>maxAngle){
        curAngle=maxAngle;
      }else if(curAngle<-maxAngle){
        curAngle=-maxAngle;
      }
      context.translate(100,y);
      context.rotate(toRadian(curAngle));
      context.drawImage(img,frameIndex++*img.width/3,0,img.width/3,img.height,-1/2*img.width/3,-1/2*img.height,img.width/3,img.height);
      frameIndex%=3;
      this.speed+=this.a*delta;
      this.y+=this.speed*delta+1/2*this.a*Math.pow(delta,2);
    }
  }

  Fly.bird=bird;
})(Fly)
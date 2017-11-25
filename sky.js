/**
 * Created by Administrator on 2017/11/25.
 */
(function (Fly) {
  "use strict";
  function Sky(option) {
    this.context=option.context;
    this.img=option.img;
    this.imgW=this.img.width;
    this.imgH=this.img.height;
    this.x=option.x || 0;
    this.y=0
    this.speed=-0.2;
  }
  Sky.prototype={
    constructor:Sky,
    draw:function (delta) {
      var context=this.context;
      this.x+=this.speed*delta;
      if(this.x<=-this.imgW){
        this.x+=this.imgW*2;
      }
      context.drawImage(this.img,this.x,this.y);
    }
  }
  Fly.Sky = Sky;
})(Fly)
/**
 * Created by Administrator on 2017/11/25.
 */
(function (Fly) {
  "use strict";
   function Land(option) {
     this.context=option.context;
     this.img=option.img;
     this.imgH=this.img.height;
     this.imgW=this.img.width;
     this.speed=-0.2;
     this.x=option.x || 0;
     this.y=option.y || 0;
   }
  Land.prototype={
    constructor:Land,
    draw:function (delta) {
      var context=this.context;
        this.x+=this.speed*delta;
      if(this.x<=-this.imgW){
        this.x+=this.imgW*4;
      }
      context.drawImage(this.img,this.x,this.y);
    }
  };
  Fly.Land=Land;
})(Fly);
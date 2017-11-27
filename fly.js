/**
 * Created by Administrator on 2017/11/24.
 */
(function (window) {
  var Flyobj=new Object();

  //工厂函数
  Flyobj.factory=function (type,option) {
      switch(type){
        case 'Bird':return new Flyobj.Bird(option);
        case 'Land':return new Flyobj.Land(option);
        case 'Pipe':return new Flyobj.Pipe(option);
        case 'Sky':return new Flyobj.Sky(option);
      }
  };

  Flyobj.loadImage=function (srcList,callback) {
    var count= 0,length=srcList.length,imgList={};
    srcList.forEach(function (srcVal) {
      var img=new Image();
      img.src='./images/'+srcVal+'.png';
      imgList[srcVal]=img;
      img.onload=function () {
          count++;
        if(count>=length){
          callback(imgList);
        }
      }
    })
  };
  Flyobj.toRadian=function (angle) {
    return angle / 180 * Math.PI;
  };
  Flyobj.createCV=function (id) {
    var container = document.getElementById(id);
    var cv =document.createElement('canvas');
      cv.width = 800;
      cv.height = 600;
      cv.style.border = "1px solid red";
      var context = cv.getContext("2d");
      container.appendChild(cv);
    return context;
  };

  window.Fly=Flyobj;
})(window);
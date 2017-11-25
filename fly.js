/**
 * Created by Administrator on 2017/11/24.
 */
(function (window) {
  var Flyobj={};
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
  }

  window.Fly=Flyobj;
})(window);
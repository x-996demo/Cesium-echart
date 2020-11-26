(function(){
    var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
     
      document.querySelector(".showTime").innerHTML =
        y +
        "年" +
        mt +
        "月" +
        day +
        "日" 
    }
})();
(function(){
    var s = null;
    s = setTimeout(timer, 1000); //開始运行
    function timer() {
      clearTimeout(s); //清除定时器
      dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = checked(dt.getHours()) //获取时
      var m = checked(dt.getMinutes()) //获取分
      var s = checked(dt.getSeconds()); //获取秒
      document.querySelector(".showtime").innerHTML =
       
        h +
        ":" +
        m +
        ":" +
        s;
      s = setTimeout(timer, 1000); //设定定时器，循环运行
      function checked(j){

        if(j<10)

             j='0'+j;

            return j;

}
    }
})();
//年度预警年份设置
(function(){
  var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
     
      document.querySelector(".year-a").innerHTML =
        y +
        "年" 
    }
})();
//年度预警上一年年份设置
(function(){
  var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear()-1;
    
     
      document.querySelector(".year-b").innerHTML =
        y +
        "年" 
    }
})();
//当月预警
(function(){
  var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth();
      
     
      document.querySelector(".year-c").innerHTML =
      y +
      "年" +
      mt +
      "月" 
    }
})();
(function(){
  var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth()+1;
      
     
      document.querySelector(".year-d").innerHTML =
      y +
      "年" +
      mt +
      "月" 
    }
})();
(function(){
  var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear()-1;
      var mt = dt.getMonth()+1;
      
     
      document.querySelector(".year-e").innerHTML =
      y +
      "年" +
      mt +
      "月" 
    }
})();

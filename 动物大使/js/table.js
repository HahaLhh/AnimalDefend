$(function () {
    // //导航栏现显示页面标签样式变化
    // $("nav a").each(function (index,element) { 
    //     $(element).click(function(){
    //         $("nav a").removeClass("here");
    //         $(this).addClass("here");
    //     })  
    //  })
    //底部二维码显示与隐藏
    $("#wx").hover(function () {
        $(".hover").fadeToggle(1000);
      })
  })

$(function(){	
    var wjx_none = '☆',
        wjx_sel  = '★';
    $(".comment li").mouseenter(function(){
        //鼠标移入: 自己和前面的兄弟变实心，其余变空心
        $(this).text(wjx_sel).prevAll().text(wjx_sel).end().nextAll().text(wjx_none);
    }).click(function(){
        //鼠标点击后，把自己添加clicked类，其余的清除clicked类
        $(this).addClass('clicked').siblings().removeClass('clicked');
    });

    //当鼠标移开评分控件时，实心显示到被点击的五角星的上
    $(".comment").mouseleave(function(){
        $(".comment li").text(wjx_none);//先给所有五角星都变空心

        $(".clicked").text(wjx_sel).prevAll().text(wjx_sel).end().nextAll().text(wjx_none);
    });

    $("li").click(function(){
        $(this).data("clicked", true);
        
        // if($(this).data("clicked") === true ) {

        // }
    });
});
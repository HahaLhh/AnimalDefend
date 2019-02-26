$(function(){
var $email = $("#email").val();
    $("#email").blur(function(){
        $.ajax({
            type: "GET",
            url: "register.php",
            // dataType: 'json',
            data: {email:$email},
            beforeSend: function () {    //beforeSend 响应数据成功返回之前的动作；
                $("#mail").text("正在查询邮箱填写是否重复")
            },
            success: function (msg) {     //success  这个函数用于响应数据成功返回之后的动作；
                if (msg = "0") {
                    $("#mail").text("这个邮箱已经填写过了 请勿重试")
                } else {
                    $("#mail").text("邮箱保存成功")
                }
            },
            error:function () {
                alert("错误")
            }
        })
        })
})

$(function(){
    // 导航的点击效果
    $(".top-nav li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    // 版本切换
    $(".select").click(function(){
        $(".change-ul").fadeToggle();
    })
    // 版本内容切换
    $(".change-ul li").click(function(){
        $(".change>div .ch").text($(this).text())
    })
})
$(function(){
    $(".nav-ul li a").click(function(){
        $(this).addClass("on").parent().siblings().children("a").removeClass("on");
        var num=$(this).parent().index()
        $(".details").eq(num).fadeIn().siblings().hide()
    })
})
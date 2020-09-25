$(function(){
    //摸小图标动画
    var $shares = $(".share li");
    $shares.mouseover(function(){
        $(this).addClass("animate__bounce").siblings().removeClass("animate__bounce")
    })

    var $navLi = $(".nav-ul .item");
    $navLi.click(function(){
        $(this).addClass("animate__rubberBand").siblings().removeClass("animate__rubberBand")
    })

    var $companyLi = $(".company li");
    $companyLi.mouseover(function(){
        $(this).addClass("animate__flipInX").siblings().removeClass("animate__flipInX");
    })

    var $logo = $(".logo");
    $logo.hover(function(){
        $(this).addClass("animate__hinge")
    },function(){
        $(this).removeClass("animate__hinge")
    })

});
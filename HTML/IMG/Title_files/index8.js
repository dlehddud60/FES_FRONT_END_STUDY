$(function(){


    $(".menu li").on("click",function (){
        $(".menu li").css("background","none").css("color", "black");
        $(this).css({"background" : "black", "color" : " white"});
    })


    var img7 = $(".img7").find("div");
    for (let i = 0; i < 7; i++) {
        $(img7[i]).css({
            "background": "url(IMG/일본거리야경" + (i + 1) + ".jpeg)",
            "background-size": "100% 100%"
        });
    }



    $(".img7 div").on("click", function () {
        var no = $(this).index() + 1;
        $(".pic").attr("src","IMG/일본거리야경" + no + ".jpeg")
    })


});


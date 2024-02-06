$(function(){

    $(".right").hide();
    $("#right4").show();
    $(".menu").on("click",function () {
        let no = $(this).attr("class").substring(4,5);
        $(".right").hide();
        $("#right" + no).show();
    })
    var menuIdx = 0 ;
    $("right_menu").css("background","black").css("color","white");
    $(".right_menu li:first-child").css("background","black").css("color","white");



    $(".right_menu li").on("click",function (){
        var menuLength = $(".right4_small li").length;
        menuIdx = $(this).index();


        $(".right4_big img").attr("src","img/menu"+menuIdx+"_bg0.jpeg")
        for (var i = 0; i < menuLength; i++) {
            $(".small_img"+i).attr("src","img/menu"+menuIdx+"_bg"+i+".jpeg")
        }


        $(".right_menu li").css("background","white").css("color","black")
        $(this).css("background","black").css("color","white");


    });

    // $(".right4_big img").attr("src","img/menu0_bg0.jpeg")


    $(".right4_big img").attr("src","img/menu0_bg0.jpeg")
    $(".right4_small li").on("click",function () {
        var bgNo = $(this).index();
        console.log(bgNo)
        $(".right4_big img").attr("src","img/menu"+menuIdx+"_bg"+bgNo+".jpeg")
    })
});

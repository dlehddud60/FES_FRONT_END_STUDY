const menuA = [
        "회사소개"
    ,   "주문예약"
    ,   "매장관리"
    ,   "판매실적"
    ,   "도움말"
]
const imgA = ["win0.jpeg","win1.jpeg","win2.jpeg","win3.jpeg","win4.jpeg"]
const img_textA = ["윈도우98","MS-DOS","Win98 BackGround","Error","윈도우98 실행가이드"]
$(function () {
    for (var i = 0; i < menuA.length; i++) {
        $(".hed div:eq(" + i + ")").text(menuA[i]);
    }
    $(".pic").attr("src","img/win0.jpeg");

    $("header div").on("click",function () {
        $("header div").css("background" , "white")
        $(this).css("background" , "orange")

        var no = $(this).index();
        $(".pic").attr("src","img/win"+no+".jpeg");
        $(".text").text(img_textA[no]);
    })
    var menuVal = 0;
    $(".menu").on("click",function () {

        if(menuVal == 0 ) {
            menuVal = 1;
            $("nav").animate({"left" : "0.3%"},500)
            $(".menu").text("안보이기")
        }else {
            menuVal = 0;
            $("nav").animate({"left" : "-3%"},200)
            $(".menu").text("보이기")
        }

    });

});
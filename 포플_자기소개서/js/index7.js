let swi = 0;
let title;
var slidePxNum = 0;
var slideNum  = 1;

const titleA = [
    "메뉴-1",
    "메뉴-2",
    "메뉴-3",
    "메뉴-4",
    "메뉴-5",
    "메뉴-6",
]
const title_colorA = [
    "green",
    "orange",
    "black",
    "teal",
    "cyan",
    "purple",
]
const winImg = [
    "wind0.jpeg","wind1.jpeg","wind2.jpeg","wind3.jpeg",
]
const title_textA = [
    "추억의 윈도우98 버튼을 클릭해보세요 사진이 옮겨집니다.",
    "그 시절 하던 게임",
    "테스트 윈도우98",
    "윈도우98 테스트 하기",
    "윈도우98을 테스트 합니다.",
    "윈도우98은 테스트 테스트 테스트"
]
$(function () {
    for (let i = 0; i < titleA.length; i++) {
        $(".title" + i).html(titleA[i]).css("background",title_colorA[i]);
        $(".at"+i+"_title_text").html(title_textA[i]);
    }
    for (let i = 0; i < winImg.length; i++) {
        $(".at_box_area li:eq(" + i + ")").css("background","url(img/" + winImg[i] + ")").css("backgroundSize","100% 100%");
    }
    $(".title").on("click",function () {
        // console.log($(this).attr("class").substr(5,1));
        var idx = $(this).attr("class").substr(5,1)
        $(".at_title_text").css("opacity","0")
        $(".at"+idx+"_title_text").css("opacity","1")
        console.log(idx);

    });

    
    $(".call").on("click",function () {
        if(swi == 0) {
            swi = 1;
            $(".menuBox").stop().animate({"right":"0%"},1000);
        }else {
            swi = 0;
            $(".menuBox").stop().animate({"right":"-10%"},500);

        }
    });
    $(".menuBox li").on("click",function () {
        swi = 0;
        $(".menuBox").stop().animate({"right":"-10%"},500);
    });

    $(".at_box_area li").on("click",function () {
       var idx = $(this).index();
       $(".at0_big img").attr("src","img/"+winImg[idx]+"")
    });

    for (let i = 0; i < winImg.length; i++) {
        $(".at1_img4 li:eq("+i+")").css("background","url(img/"+winImg[i]+")").css("backgroundSize","100% 100%");
    }
    $(".disp").text(slideNum + "/4");
    $(".at1_btn .next").on("click",function () {
        slideNum += 1;
        if(slideNum > 4) {
            slideNum = 1;
        }
        $(".disp").text(slideNum + "/4");
        slidePxNum -= 500;
        if(slidePxNum <= -2000){
            slidePxNum = 0;
        }
        $(".at1_img4").stop().animate({"left" : ""+slidePxNum+"px"},500)

    })
    $(".at1_btn .prev").on("click",function () {
        slideNum -= 1;
        if(slideNum < 1) {
            slideNum = 4;
        }
        $(".disp").text(slideNum + "/4");


        if(slidePxNum == 0) {
            slidePxNum = -1500;
        }else{
            slidePxNum += 500;
        }
        $(".at1_img4").stop().animate({"left" : ""+slidePxNum+"px"},500)

    })


});
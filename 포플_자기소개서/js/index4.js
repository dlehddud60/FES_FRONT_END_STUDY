const menuA = [
        "토끼와 거북이 경주"
    ,   "취업과 진로"
    ,   "4차 산업"
    ,   "NCS 국가직무"
    ,   "MBTI와 적성검사"
];
const at0A = [
        "1. 전략적인 속도 조절"
    ,   "2. 휴식과 집중"
    ,   "3. 지혜로운 선택"
    ,   "4. 등료들과 협력"
    ,   "5. 도움을 청하다"

];
const at1A = [
        "1. 전문성 강화"
    ,   "2. 풀스택 개발자로의 전환"
    ,   "3. 산업 동향과 수요"
    ,   "4. 프로젝트 경험의 다양성"
    ,   "5. 개인 공부와 경력 쌓기"

];
const at2A = [
        "1. 전략적인 속도 조절"
    ,   "2. 휴식과 집중"
    ,   "3. 지혜로운 선택"
    ,   "4. 등료들과 협력"
    ,   "5. 도움을 청하다"

];
const at3A = [
        "1. 전략적인 속도 조절"
    ,   "2. 휴식과 집중"
    ,   "3. 지혜로운 선택"
    ,   "4. 등료들과 협력"
    ,   "5. 도움을 청하다"

];
const at4A = [
        "1. 전략적인 속도 조절"
    ,   "2. 휴식과 집중"
    ,   "3. 지혜로운 선택"
    ,   "4. 등료들과 협력"
    ,   "5. 도움을 청하다"

];
const backA = [
    "menu0_bg0.jpeg","menu0_bg1.jpeg","menu0_bg2.jpeg","menu0_bg3.jpeg","menu0_bg4.jpeg"
];
const backB = [
    "win4.jpeg","menu1_bg1.jpeg","menu1_bg2.jpeg","menu1_bg3.jpeg","menu1_bg0.jpeg"
];
let swi = 0, swi2 = 0;
$(function (){
    for (let i = 0; i < menuA.length; i++) {
        $("nav div:nth-child(" + ( i + 1 )+ ")").html(menuA[i]);
        $(".title" + i).html(menuA[i]);
        $(".at0 .text li:eq(" + (i) + ")").html(at0A[i]);
        $(".at1 .text li:eq(" + (i) + ")").html(at1A[i]);
        $(".at2 .text li:eq(" + (i) + ")").html(at2A[i]);
        $(".at3 .text li:eq(" + (i) + ")").html(at3A[i]);
        $(".at4 .text li:eq(" + (i) + ")").html(at4A[i]);
    }
    $(".bar").on("click",function () {
        //animate를 사용하면 nav가 80%만큼 left로 움직인다는것이다.
        if(swi2 == 0 ) {
            swi2 = 1;
            $(this).html("X");
            $("nav").animate({"left":"80%"},500);
        }else {
            swi2 = 0;

            $(this).html("<i class=\"fa-solid fa-bars m1\"></i>");
            $("nav").animate({"left":"100%"},500);
        }
    })
    $(".big").css("background","url(img/"+ backA[0] + ")").css("backgroundSize","100% 100%");
    $("nav div").on("click",function () {
        swi2 = 0;
        $(".bar").html("<i class=\"fa-solid fa-bars m1\"></i>");
        $("nav").animate({"left":"100%"},500);
        var num = $(this).index();
        $(".at").hide()
        $(".big").css("background","url(img/"+ backA[num] + ")").css("backgroundSize","100% 100%");
        $(".at" + num).show().css("background","url(img/"+ backB[num] + ")").css("backgroundSize","100% 100%");
    });
    $(".text li").on("click",function () {
        console.log("====================",this)
        if(swi == 0) {
            swi = 1;
            text_li(this);
        }
        $(".text li").css({"background" : "white", "color" : "black"});
        $(this).css({"background" : "green","color" : "black", "border" : "1px solid white"});
    })
});
function text_li(obj) {
    $(".text").animate({
        "height":"50px",
        "top":"90%",
        "padding":"0" },500, function() {
        $(".text").css
        ({
            "display":"flex", "justifyContent":"space-around"
        });
        $(".text li").css
        ({
            "fontSize":"1rem", "width":"15%", "height":"100%",
            "lineHeight":"50px", "textAlign":"center",
            "marginTop":"0", "background":"white"
        });
        $(obj).css({"background" : "green","color" : "black", "border" : "1px solid white"});
    });
    $(".big").animate({"left" : "100px","borderRadius" : "100%"},500);
    $(obj).css({"background" : "green","color" : "black", "border" : "1px solid white"});
    console.log(obj)
}

const topMenu1 = [
                    "개요"
                ,   "비행기표 구매"
                ,   "환전"
                ,   "물품준비"
                ,   "배낭 결속"
                ,   "숙소예약"
                ,   "공항출발"
                ,   "입출국"
                ,   "기내 꿀팁"
                ]
const topMenu2 = [
                    "오사카"
                ,   "맛집"
                ,   "쇼핑"
                ,   "긴급상황"
                ,   "여행 코스"
                ,   "편의점 꿀팁"
                ,   "오사카 온천"
                ];
const topMenu3 = [
                    "호텔 위치"
                ,   "출국 기내식"
                ,   "테스트"
                ,   "가라 데이터"
                ]


const osakaT = [
        [["osaka0-0-0",1,2,3],[0,1,2,3],[0,1,2,3]]// 0
    ,   [[],[]]//1
    ,   [[],[]]//2
]



osakaT[0][0][1];





const osaka00 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka01 = ["osaka0-1-0.jpeg","osaka0-1-1.jpeg"]
const osaka02 = ["osaka0-2-0.jpeg","osaka0-2-1.jpeg","osaka0-2-2.jpeg"]
const osaka03 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka04 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka05 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka06 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka07 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka08 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka09 = ["osaka0-0-0.jpeg","osaka0-0-1.jpeg","osaka0-0-2.jpeg","osaka0-0-3.jpeg"]
const osaka10 = ["osaka1-0-0.jpeg","osaka1-0-0.jpeg","osaka1-0-0.jpeg","osaka1-0-0.jpeg","osaka1-0-0.jpeg"]
const osaka11 = ["osaka1-1-0.jpeg","osaka1-1-1.jpeg","osaka1-1-2.jpeg","osaka1-1-3.jpeg","osaka1-1-4.jpeg","osaka1-1-4.jpeg"]
const osaka12 = ["osaka1-1-0.jpeg","osaka1-1-1.jpeg","osaka1-1-2.jpeg","osaka1-1-3.jpeg","osaka1-1-4.jpeg"]
const osaka13 = ["osaka1-1-0.jpeg","osaka1-1-1.jpeg","osaka1-1-2.jpeg","osaka1-1-3.jpeg","osaka1-1-4.jpeg"]
const osaka14 = ["osaka1-1-0.jpeg","osaka1-1-1.jpeg","osaka1-1-2.jpeg","osaka1-1-3.jpeg","osaka1-1-4.jpeg"]
const osaka15 = ["osaka1-1-0.jpeg","osaka1-1-1.jpeg","osaka1-1-2.jpeg","osaka1-1-3.jpeg","osaka1-1-4.jpeg"]




let osakaMap = new Map([
    [""]
]);


var topMenuArr = topMenu1;
var slideMenuPhotoNum = 0;
var topMenuPhotoNum;
const startTopMenu = () => {
    $("#top").html("")
    for (let i = 0; i < topMenuArr.length; i++) {
        $("#top").append("<div class=\"menu\">"+topMenuArr[i]+"</div>")
    }
}
$(function () {
    alert(osakaT[0][0][1]);
    startTopMenu();
    let menuSwitchVal = 0;
    $(".subMenuBar").on("click",function () {
        switch (menuSwitchVal) {
            case 0 : {
                menuSwitchVal = 1;
                $(".slideMenu").animate({"left":"-5%"},500);
                break;
            }
            case 1 : {
                menuSwitchVal = 0;
                $(".slideMenu").animate({"left":"-20%"},500);
                break;
            }
        }
    });
    $(".slideMenu div").on("click",function () {

        $(".slideMenu").animate({"left":"-20%"},500);
        switch ($(this).index()) {
            case 0 : {
                slideMenuPhotoNum = 0;
                topMenuArr = topMenu1;
                break;
            }

            case 1 :{
                slideMenuPhotoNum = 1;
                topMenuArr = topMenu2;
                break;
            }
            case 2 :{
                slideMenuPhotoNum = 2;
                topMenuArr = topMenu3;
                break;
            }
        } //switch
        startTopMenu();
    })

    $("#top").on("click",".menu",function () {
        $(".smallPhotoArea").html("");
        topMenuPhotoNum = $(this).index();
        var arrLength = 0;
        if(slideMenuPhotoNum == 0) {
            switch (topMenuPhotoNum) {
                case 0 : {
                    arrLength = osaka00.length;
                    break;
                }
                case 1 : {
                    arrLength = osaka01.length;
                    break;
                }
                case 2 :
                    arrLength = osaka02.length;
                    break;
                case 3 :
                    arrLength = osaka03.length;
                    break;
                case 4 :
                    arrLength = osaka04.length;
                    break;
                case 5 :
                    arrLength = osaka05.length;
                    break;
                case 6 :
                    arrLength = osaka06.length;
                    break;
                case 7 :
                    arrLength = osaka07.length;
                    break;
                case 8 :
                    arrLength = osaka08.length;
                    break;
                case 9 :
                    arrLength = osaka09.length;
                    break;
                case 10 :
                    arrLength = osaka09.length;
                    break;

            } //switch
        }else if(slideMenuPhotoNum == 1){
            switch (topMenuPhotoNum) {
                case 0 : {
                    arrLength = osaka10.length;
                    break;
                }
                case 1 : {
                    arrLength = osaka11.length;
                    break;
                }
                case 2 :
                    arrLength = osaka11.length;
                    break;
                case 3 :
                    arrLength = osaka12.length;
                    break;
                case 4 :
                    arrLength = osaka13.length;
                    break;
                case 5 :
                    arrLength = osaka14.length;
                    break;
                case 6 :
                    arrLength = osaka15.length;
                    break;
                case 7 :
                    arrLength = osaka06.length;
                    break;
                case 8 :
                    arrLength = osaka07.length;
                    break;
                case 9 :
                    arrLength = osaka08.length;
                    break;
                case 10 :
                    arrLength = osaka09.length;
                    break;
            }
        }else if(slideMenuPhotoNum == 2){
            switch (topMenuPhotoNum) {

                case 0 : {
                    arrLength = osaka00.length;
                    break;
                }
                case 2 :
                    arrLength = osaka01.length;
                    break;
                case 3 :
                    arrLength = osaka02.length;
                    break;
                case 4 :
                    arrLength = osaka03.length;
                    break;
                case 5 :
                    arrLength = osaka04.length;
                    break;
                case 6 :
                    arrLength = osaka05.length;
                    break;
                case 7 :
                    arrLength = osaka06.length;
                    break;
                case 8 :
                    arrLength = osaka07.length;
                    break;
                case 9 :
                    arrLength = osaka08.length;
                    break;
                case 10 :
                    arrLength = osaka09.length;
                    break;
            }
        } //if


        for (let i = 0; i < arrLength; i++) {
            $(".smallPhotoArea").append("<img src=\"img/osaka"+slideMenuPhotoNum+"-"+topMenuPhotoNum+"-"+i+".jpeg\">");
        }
    });

    $(".smallPhotoArea").on("click","img",function () {
        $(".bigPhotoArea").html("");
        $(".bigPhotoArea").append($(this).clone());
    })

});
$(document).ready(() => {
    // 여기에 코드 작성
    $(".left div").on("click",function (){
        $(".left div").css("background","none")
        $(this).css("background","skyblue")
    })
    $(".menu li").on("click",function (){
        var no = $(this).index();
        $(".menu li").css("background","none");
        $(this).css("background","orange");
        $("article").hide();


        switch (no){
            case 0: {
                $(".title").text("MBTI 검사에 오신 것을 환영합니다.");

                $(".at0").show();
                //MBTI 관련 서브메뉴
                $(".left .sub0").text("에너지 충전");
                $(".left .sub1").text("인식기증(정보수집)");
                $(".left .sub2").text("판단기능(결정,선택)");
                $(".left .sub3").text("생활양식(판단,인식)");
                break;
                //MBTI 내용중
            }
            case 1:{
                $(".title").text("DISC 검사에 오신 것을 환영합니다.");
                $(".at1").show();
                $(".left .sub0").text("주도형");
                $(".left .sub1").text("사교형");
                $(".left .sub2").text("안정형");
                $(".left .sub3").text("신중형");
                break;
            }
            case 2:{
                $(".title").text("흥미적성 검사에 오신 것을 환영합니다.");
                $(".at2").show();
                $(".left .sub0").text("흥미-0");
                $(".left .sub1").text("흥미-1");
                $(".left .sub2").text("흥미-2");
                $(".left .sub3").text("흥미-3");
                break;
            }
            case 3:{
                $(".title").text("학습역량 검사에 오신 것을 환영합니다.");
                $(".at3").show();
                $(".left .sub0").text("학습역량-0");
                $(".left .sub1").text("학습역량-1");
                $(".left .sub2").text("학습역량-2");
                $(".left .sub3").text("학습역량-3");
                break;
            }
        }
    });

    $(".at0_box0").on("click", function (){
        $(".at0_box").css("opacity","0.4").css("background","black").css("color","black");;
        $(".at0_box1").css("opacity","1").css("background","white").css("color","black");
    });
    $(".at0_box1").on("click", function (){
        $(".at0_box").css("opacity","0.4").css("background","black").css("color","black");;
        $(".at0_box2").css("opacity","1").css("background","white").css("color","black");
    });
});
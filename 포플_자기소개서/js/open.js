const imgArr = ["win0.jpeg","win1.jpeg","win2.jpeg","win3.jpeg","win4.jpeg"]

$(function () {
    $("nav div").on("click",function () {
        let index = $(this).index();
        console.log(index);
        $(".img").attr("src","img/win"+index+".jpeg");
        switch (index) {
            case 0 : $(".imgDetail").text("윈도우98 부팅화면 창"); break;
            case 1 : $(".imgDetail").text("윈도우98 배경화면 입니다.");break;
            case 2 : $(".imgDetail").text("윈도우98 초록색 배경화면 입니다.");break;
            case 3 : $(".imgDetail").text("윈도우98 부팅화면111 창");break;
            case 4 : $(".imgDetail").text("윈도우98 부팅화면222 창");break;
        }

    })
})
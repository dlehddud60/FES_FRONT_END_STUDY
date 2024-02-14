const repeatA = [
    "For","Foreach","Fon in","For of","Map","while","Do while",
]
var selectLength = 0;

$(function () {
//     for (let i = 0; i < repeatA.length; i++) {
//         $("nav div:eq("+i+")").text(repeatA[i]);
//
// }
    $(".view").append("<img src=\"img/osaka0.jpeg\" alt=\"\">");

    var result = true;
    var idx = 0;
    while (result) {
        $("nav div:eq("+idx+")").text(repeatA[idx]);
        $("section img:eq("+idx+")").attr("src","img/osaka"+idx+".jpeg")
        idx++;
        if(6 < idx) {
            result = false;
        }
    }
    $("section img").on("click",function () {
        var idx = $(this).index();
        selectLength = idx;
        $(".view").html("")
        $(".view").append("<img src=\"img/osaka"+idx+".jpeg\" alt=\"\">");
    })
    $(".direction span").on("click",function () {
        var idx = $(this).index();
        var imgLength = $("section img").length;
        switch (idx){
            case 0 : {
                selectLength--;
                if(selectLength < 0) selectLength = 6;
                break;
            }case 1 : {
                selectLength ++;
                if(selectLength > imgLength-1) selectLength = 0;

            }
        }

        $(".view").html("<img src=\"img/osaka"+selectLength+".jpeg\" alt=\"\">");

    })

    $(document).keydown(function(event){
        var imgLength = $("section img").length;



        var key = event.keyCode;
        if(key==37){
            selectLength--;
            if(selectLength < 0) selectLength = 6;
            console.log("왼")
        }else if(key==39){
            selectLength ++;
            if(selectLength > imgLength-1) selectLength = 0;
            console.log("오른")

        }
        $(".view").html("<img src=\"img/osaka"+selectLength+".jpeg\" alt=\"\">");

    });

})
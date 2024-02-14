let swi = 0;
const imgA = [
    "osaka0",
    "osaka1",
    "osaka2",
    "osaka3",
    "osaka4",
    "osaka5",
    "osaka6",
];

const menuA = [
    "도전정신",
    "희망정신",
    "업그레이드",
    "믿음",
    "신뢰",
    "정성",
    "감사",
]


function move (idx){
        $(".move").animate({"left":"20%"},500);

    // if(swi == 0) {
    //     swi = 1;
    //     $(".move").animate({"left":"20%"},500);
    // }else {
    //     swi = 0;
    //     $(".move").animate({"left":"90%"},500);
    // }
    $(".move img").attr("src","img/"+imgA[idx]+".jpeg");
    console.log(idx)
}
$(function () {
    for (let i = 0; i < menuA.length; i++) {
        $(".menu li:eq("+i+")").html(menuA[i])

    }
    $(".menu li").on("click", function () {
        let idx = $(this).index();
        for (let i = 0; i < imgA.length; i++) {
            switch (idx) {
                case i : {
                    move(idx);
                    break;
                }

            }
        }

    })
})
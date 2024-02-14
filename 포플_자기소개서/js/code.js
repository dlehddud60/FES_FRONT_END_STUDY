const menuA = [
    "박장대소","기립박수","미소찾기","박수웃음","a","b","c"
]
let pic_textA = [
    "손벽을 치면서 크게 웃은 모습",
    "일어나서 박수치기",
    "소리내지 않고 얼굴에 웃음 표현 하기",
    "박수를 치면서 웃기",
    "a에 관련 사항",
    "b에 관련 사항",
    "c에 관련 사항",
]

let i, no
$(function () {
    for (let i = 0; i <menuA.length; i++) {
        $("nav div:eq(" + i + ")").html(menuA[i]);
    }
    $("nav div").on("click",function () {
        no = $(this).index();
        $(".pic_text").text(pic_textA[no]);
        if(no > 4) {
            $(".pic").attr("src","img/menu1_bg"+(no-5)+".jpeg")
        }else {
            $(".pic").attr("src","img/menu0_bg"+no+".jpeg")

        }
    })
})
let kor = 55, eng=60, mat = 70, sum = 0, avg = 0;
let k, e, m, s, a;
window.onload=function () {
    var calc = document.getElementById("calc")
    calc.addEventListener("click",function (){
        sum = kor + eng + mat;
        avg = sum / 3;
        document.querySelector(".sum").innerText = sum;
        document.querySelector(".avg").innerText = avg.toFixed(2);
    });
}
var menu1,menu2,menu3,menu4,pic,no, count = 1;
window.onload=function () {
    menu1 = document.getElementById("menu1");
    menu2 = document.getElementById("menu2");
    menu3 = document.getElementById("menu3");
    menu4 = document.getElementById("menu4");
    pic = document.querySelector(".pic");
    no = document.querySelector(".no");
    menu1.onclick = function () {
        count = 1;
        pic.src="/IMG/일본거리야경"+count+".jpg"
        no.innerText = count;

    }
    menu2.onclick = function () {
        count = 2;
        pic.src="/IMG/일본거리야경"+count+".jpg"
        no.innerText = count;
    }
    menu3.onclick = function () {
        count = 3;
        pic.src="/IMG/일본거리야경"+count+".jpg"
        no.innerText = count;
    }
    menu4.onclick = function () {
        count = 4;
        pic.src="/IMG/일본거리야경"+count+".jpg"
        no.innerText = count;

    }

    let prev, next;
    prev = document.querySelector(".prev");
    next = document.querySelector(".next");

    prev.onclick = function () {
        count -= 1;
        if(count < 1)count = 4;
        pic.src="/IMG/일본거리야경"+count+".jpg"
        no.innerText = count;
    }
    next.onclick = function () {
        count +=1 ;
        if(count > 4)count = 1;
        pic.src="/IMG/일본거리야경"+count+".jpg"
        no.innerText = count;
    }

}
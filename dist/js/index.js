console.log("Hello");
// 載入畫面
let percent=0;
let br=document.querySelector("#bar");
let pl=document.querySelector("#pageloading")
// console.log(bar);
let timer=setInterval(function(){
    br.style.width=percent+"%";
    percent+=1;
    if(percent>100){
        pl.classList.add("complete");
    }
},60);
// clearTimeout(timer);
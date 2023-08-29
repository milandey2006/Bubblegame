var timer = 60;
var score = 0;
var hitrn = 0;

function bubble() {
    var clutter = "";

    for (var i = 1; i <= 161; i++){
       var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble"><h3>${rn}</h3></div>&nbsp;`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer(){

    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
            
        }
    }, 1000);
}

function hit(){
    hitrn = Math.floor(Math.random()*10);

    document.querySelector("#hitval").textContent = hitrn;
}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    
    if(clickednum === hitrn){
        increaseScore();
        bubble();
        hit();
    }
});
  
bubble();
runtimer();
hit();




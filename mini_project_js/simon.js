let gameseq=[];
let userseq=[];
let score=[];
let btns=["orange", "red", "green", "purple"];
let high=0;
let started = false;
let lvl=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
    lvl++;
    h2.innerText = `level ${lvl}`;

    let  randindx= Math.floor(Math.random() * 3);
    let randcolor= btns[randindx];
    let rb= document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(rb);
}

function checkans(idx){
  
           
    if(userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over! your score  is <b>${lvl}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
        },150);
        score.push(lvl);
        
        reset();
    }
}


function btnpress(){
    let btn= this;
    gameflash(btn);

    usercolor= btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);

    checkans(userseq.length-1);
}

let allbtn= document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function highscore(){
    for(i=0; i<score.length-1; i++){
        if(score[i]<lvl){
            let high= lvl;
        }else{
            high=score[i];
        }
       let h3=document.querySelector("h3");
        h3.innerText=`high score= ${high}`;
    }
}

function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    lvl=0;
    highscore();
}


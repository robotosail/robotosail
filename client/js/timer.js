//"use strict";

let interval;
const startingMinutes = 4;
let time = startingMinutes * 60;
const countdown = document.getElementById("countdown");
const countdownimage = document.getElementById("clockimage");
let hp = document.getElementById("hp-bar");
/* set the timer to count down for every sec*/
window.addEventListener("load", function(e){
interval = setInterval(counter, 1000);
});


function counter(){
  /* the minute*/
  let minutes = Math.floor(time / 60);
  /* the second*/
  let seconds = time % 60;
  /* if the seconds is less than 10 then it should display 0 to the next number*/
  seconds = seconds < 10 ? "0" + seconds : seconds;
  /*adding the count down to show in the html*/
  countdown.innerHTML = `${minutes} : ${seconds}`;
  
  /* decreaseaing the timer*/
  time--;
  /* if the timer is less than 0 it should stop*/
  if(time <= startingMinutes){
    const fireflymap = document.getElementById("card-holder1");
    const mapholder = document.getElementById("map-container");

    
    clearInterval(interval);
    countdown.innerHTML = "0 : 00";
    time = 0;
    countdown.style.display = "none";
    countdownimage.style.display = "none";
    /*stop player from moving*/
    movespeed = 0;
    cross.style.display = "none";
    scope.style.display = "none";
    controls.disconnect();
    hp.style.display = "none";
    
	//showing the map picker timer
    const countdownTimer = setInterval(displayMapTimer, 1000);
	  
    //displaying the
    mapholder.style.display = "flex";
  
  }else if(time <= 3){
    movespeed = 0.2;
  }
}


controls.addEventListener("lock", function(e){
  countdown.style.display = "block";
  countdownimage.style.display = "block";
});

controls.addEventListener("unlock", function(e){
    countdown.style.display = "none";
  countdownimage.style.display = "none";
});
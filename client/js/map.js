const fireflymap = document.getElementById("card-holder1");
let seconds = 1;
const breakTimer = document.getElementById("breaktimer");

function displayMapTimer(){
let minutes = Math.round((seconds - 30) / 60);
let remaingSeconds = seconds % 60;
	
//showing the timer
breakTimer.style.display = "block";

if(remaingSeconds < 10){
  remaingSeconds = "0" + remaingSeconds;
}
breakTimer.innerHTML = minutes + ":" + remaingSeconds;

if(seconds === 0){
  clearInterval(countdownTimer);
  const mapholder = document.getElementById("map-container");
  breakTimer.innerHTML = "buxsa";
  //removing the timer
  breakTimer.style.display = "none";
  mapholder.style.display = "none";
}
else{
  seconds --;
  }
}


function changeMap(){
map2();
}

fireflymap.addEventListener("click", changeMap);

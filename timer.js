const timeH = document.getElementById('time');
var stop = false;
var endThingy = false;
var exitTimer = false;

async function startTime() {
    let timeSecond = 1500;
    displayTime(1500);
    const countDown25 = setInterval(()=>{
        if(stop==false) {
            timeSecond--;
        }
        displayTime(timeSecond);
        if(timeSecond == 0 || timeSecond < 1 || endThingy == true){
          endCount25();
          clearInterval(countDown25);
        }
        if (exitTimer == true) {
            endTimer();

        }
      }, 1000);
}

async function pauseTime() {
    stop=!stop;
    const btn = document.getElementById("changeName");
    if (btn.innerText == "Pause") {
        btn.innerText = "Resume";
    } else {
        btn.innerText = "Pause";
    }
}

async function restartTime() {
    endThingy=true;
}

async function exitTime() {
    endCount25();
    clearInterval(countDown25);
}

function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${(min < 10) ? '0' : ''}${min}:${(sec < 10) ? '0' : ''}${sec}`; 
}

function endCount25(){
  timeH.innerHTML = '00:00';
  endThingy=false;
  stop=false;
}

function endTimer() {
  timeH.innerHTML = '00:00';
  endThingy=false;
  stop=false;
  exitTimer=false;
  window.location.href = "index.html";
}
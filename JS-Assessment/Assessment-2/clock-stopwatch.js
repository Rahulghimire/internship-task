let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
let stopwatch = document.createElement("div");
cardContainer.appendChild(stopwatch);
cardContainer.setAttribute("class", "card-container");
stopwatch.setAttribute("id", "stopwatch");
stopwatch.setAttribute("class", "stopwatch");
let stopBtn = document.createElement("button");
stopwatch.appendChild(stopBtn);
stopBtn.append("Stopwatch");
stopBtn.setAttribute("id", "stop-btn");
stopBtn.setAttribute("class", "stop-btn");

let clockBtn = document.createElement("button");
stopwatch.appendChild(clockBtn);
clockBtn.append("Clock");
clockBtn.setAttribute("id", "clock-btn");
clockBtn.setAttribute("class", "clock-btn");

let time = document.createElement("div");
stopwatch.appendChild(time);
time.setAttribute("id", "time");
time.setAttribute("class", "time");
let hour = document.createElement("span");
time.appendChild(hour);
hour.setAttribute("id", "hour");
hour.append("00");
let label = document.createElement("label");
label.append(":");
time.appendChild(label);

let min = document.createElement("span");
time.appendChild(min);
min.setAttribute("id", "min");
min.append("00");
let label1 = document.createElement("label");
label1.append(":");
time.appendChild(label1);

let sec = document.createElement("span");
time.appendChild(sec);
sec.setAttribute("id", "sec");
sec.append("00");

let time1 = document.createElement("div");
stopwatch.appendChild(time1);
time1.style.display = "none";
time1.setAttribute("id", "time1");
time1.setAttribute("class", "time1");
let hour1 = document.createElement("span");
time1.appendChild(hour1);
hour1.setAttribute("id", "hour1");
hour1.append("00");
let label2 = document.createElement("label");
label2.append(":");
time1.appendChild(label2);

let min1 = document.createElement("span");
time1.appendChild(min1);
min1.setAttribute("id", "min1");
min1.append("00");
let label3 = document.createElement("label");
label3.append(":");
time1.appendChild(label3);

let sec1 = document.createElement("span");
time1.appendChild(sec1);
sec1.setAttribute("id", "sec1");
sec1.append("00");

let buttonContainer = document.createElement("div");
stopwatch.appendChild(buttonContainer);
buttonContainer.setAttribute("class", "btn-container");
let start = document.createElement("button");
let stop = document.createElement("button");
let reset = document.createElement("button");
buttonContainer.appendChild(start);
buttonContainer.appendChild(stop);
buttonContainer.appendChild(reset);
start.append("Start");
stop.append("Stop");
reset.append("Reset");
start.setAttribute("class", "btn");
stop.setAttribute("class", "btn");
reset.setAttribute("class", "btn");
start.setAttribute("id", "start");
stop.setAttribute("id", "stop");
reset.setAttribute("id", "reset");

//stopwatch

let hrs = 00;
let secs = 00;
let mins = 00;
let count = 00;

let timer = false;

let buttonContainer1 = document.createElement("div");
stopwatch.appendChild(buttonContainer1);
buttonContainer1.setAttribute("class", "btn-container1");
buttonContainer1.setAttribute("id", "btn-container1");
let start1 = document.createElement("button");
let stop1 = document.createElement("button");
let reset1 = document.createElement("button");
buttonContainer1.appendChild(start1);
buttonContainer1.appendChild(stop1);
buttonContainer1.appendChild(reset1);
start1.append("Start");
stop1.append("Stop");
reset1.append("Reset");
start1.setAttribute("class", "btn");
stop1.setAttribute("class", "btn");
reset1.setAttribute("class", "btn");
start1.setAttribute("id", "start1");
stop1.setAttribute("id", "stop1");
reset1.setAttribute("id", "reset1");

// let btnctn = document.getElementById("btn-container1");
// btnctn.style.display = "none";
buttonContainer1.style.display = "none";

var stopbtn = document.getElementById("stop-btn");
stopbtn.disabled = true;
stopbtn.addEventListener("click", () => {
  console.log("clicked");
  stopbtn.disabled = true;
  btnClock.removeAttribute("disabled");
  time.style.display = "block";
  buttonContainer.style.display = "block";
  buttonContainer1.style.display = "none";
  time1.style.display = "none";
  //   btnctn.style.display = "none";
});

let thours = document.getElementById("hour");
let tmins = document.getElementById("min");
let tsec = document.getElementById("sec");

let bstart = document.getElementById("start");
let bstop = document.getElementById("stop");
let breset = document.getElementById("reset");
console.log(bstart.disabled);

bstop.disabled = true;
breset.disabled = true;

bstart.addEventListener("click", () => {
  console.log("clicked");
  bstart.disabled = true;
  bstop.disabled = false;
  breset.disabled = false;
  timer = true;
  stopWatch();
});

function stopWatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      secs = secs + 1;
      count = 0;
    }
    if (secs == 60) {
      mins = mins + 1;
      secs = 0;
    }
    if (mins == 60) {
      hrs = hrs + 1;
      mins = 0;
      secs = 0;
    }
    let hrString = hrs;
    let minString = mins;
    let secString = secs;
    if (hrs < 10) {
      hrString = "0" + hrString;
    }
    if (mins < 10) {
      minString = "0" + minString;
    }
    if (secs < 10) {
      secString = "0" + secString;
    }

    document.getElementById("hour").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    setTimeout("stopWatch()", 10);
  }
}

bstop.addEventListener("click", () => {
  console.log("clicked");
  bstop.disabled = true;
  bstart.disabled = false;
  breset.disabled = false;
  timer = false;
});

breset.addEventListener("click", () => {
  console.log("clicked");
  breset.disabled = true;
  bstart.disabled = false;
  bstop.disabled = false;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});

var btnClock = document.getElementById("clock-btn");
btnClock.addEventListener("click", () => {
  console.log("clicked");
  //   let time = document.getElementById("time");
  btnClock.disabled = true;
  stopbtn.removeAttribute("disabled");
  buttonContainer.style.display = "none";
  buttonContainer1.style.display = "block";
  time.style.display = "none";
  time1.style.display = "block";
  start1.disabled = false;
  stop1.disabled = true;
  reset1.disabled = true;
});

start1.addEventListener("click", () => {
  start1.disabled = true;
  stop1.disabled = false;
  reset1.disabled = false;
  console.log("hello");
  currentTime();
});

function currentTime() {
  console.log("hello");
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  hours = checkTime(hours);
  mins = checkTime(mins);
  secs = checkTime(secs);
  document.getElementById("hour1").innerHTML = hours;
  document.getElementById("min1").innerHTML = mins;
  document.getElementById("sec1").innerHTML = secs;
  setTimeout(currentTime, 1000);
  console.log(hrs, mins, secs);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

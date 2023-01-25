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

let thours = document.getElementById("hour");
let tmins = document.getElementById("min");
let tsec = document.getElementById("sec");

let bstart = document.getElementById("start");
let bstop = document.getElementById("stop");
let breset = document.getElementById("reset");
console.log(bstart.disabled);

bstart.addEventListener("click", () => {
  console.log("clicked");
  bstop.disabled = true;
  breset.disabled = true;
  timer = true;
  stopWatch();
});

function stopWatch() {
  console.log("run");
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
    // thours.append(hrs);
    // tmins.append(mins);
    // tsec.append(secs);
    document.getElementById("sec").innerHTML = secs;
    setTimeout("stopWatch()", 1000);
  }
}

bstop.addEventListener("click", () => {
  console.log("clicked");
  bstart.disabled = true;
  breset.disabled = true;
});

breset.addEventListener("click", () => {
  console.log("clicked");
  bstart.disabled = true;
  bstop.disabled = true;
});

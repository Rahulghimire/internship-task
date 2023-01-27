const setWidthContainer = 500;
const setHeightContainer = 500;
let boxWidth = 50;
let boxHeight = 50;

let boxes = 2;
let boxInitialPosition = 0;

let boxMarginLeft = 0;
let direction = 1;


let body = document.querySelector("body");
let main = document.createElement("div");
body.appendChild(main);
main.setAttribute("class", "main");
main.setAttribute("id", "main");

main.style.width = setWidthContainer + "px";
main.style.height = setHeightContainer + "px";

let box = document.createElement("div");
main.appendChild(box);

box.classList.add("box");
box.setAttribute("id", "box");
box.style.width = boxWidth + "px";
box.style.height = boxHeight + "px";

box.style.marginLeft = boxMarginLeft + "px";

setInterval(() => {
  if (boxInitialPosition >= 450) {
    console.log("hello");
    direction = -1;
    boxInitialPosition = boxInitialPosition + 10 * direction;
    box.style.marginLeft = boxInitialPosition + "px";
  }
  if (boxInitialPosition <= 0) {
    direction = +1;
    boxInitialPosition = (boxInitialPosition + 10) * direction;
  } else {
    boxInitialPosition += 10 * direction;
    box.style.marginLeft = boxInitialPosition + "px";
  }
}, 100);

// function boxContainer() {
//   console.log("hello");

//   let box1 = document.createElement("div");
//   main.appendChild(box1);
//   box1.classList.add("box");
//   box1.setAttribute("id", "box1");
//   document.getElementById("box1").style.width = boxWidth + "px";
//   document.getElementById("box1").style.height = boxHeight + "px";
// }
// boxContainer();

let boxPositionX = 0;
let boxPositionY = 0;

let boxMarginTop = 0;
box.style.marginTop = boxMarginTop + "px";

let box1 = document.createElement("div");
main.appendChild(box1);

box1.classList.add("box1");
box1.setAttribute("id", "box1");
box1.style.width = boxWidth + "px";
box1.style.height = boxHeight + "px";

setInterval(() => {
  if (boxInitialPosition >= 400) {
    console.log("hello");
    direction = -1;
    boxInitialPosition = boxInitialPosition + 10 * direction;
    box1.style.marginTop = boxInitialPosition + "px";
  }
  if (boxInitialPosition <= 0) {
    direction = +1;
    boxInitialPosition = (boxInitialPosition + 10) * direction;
  } else {
    boxInitialPosition += 10 * direction;
    box1.style.marginTop = boxInitialPosition + "px";
  }
}, 100);

// function boxCollision() {}

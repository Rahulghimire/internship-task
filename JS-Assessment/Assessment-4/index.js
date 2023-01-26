// const width=500;
// let current=0;
// let direction=1;
// cardContainer.style.width=width+'px';
// const images=innerContainer.children;
// for(let i=0;i<images.length;i++){
//     images[i].style.width="";
// }

// current=0;
// innercontainer
// css transition:transformm 1s linear

// const innercomtaimer=
// let current=0
// direction=-1

// setInterval(()=>{
//     current=0;
// },2000)

//collision detection

// .main{
// width:600px;
// h:500px;
// bg-color:red;
// }
// .main-blue{
//     w:50px
//     h:50px;
// bg-color:blue;
// }

// let direction=1;
// const initialPos=100;
// const body = document.querySelector("body");
// const main=document.createelement div
// main.classlist.add.main
// const box1=doc.createElemate;
// box1.classList.add('box')
// box1.style.marginLeft=100px

// setInterval(func()=>{
// initalPosx=initialpos+1;
// if(initialPos>=600){
//     alert("wall");
//     direction=-1;
// }
// box1.styple.marginLeft="initialpo"+'px';
// },1000)

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

document.getElementById("main").style.width = setWidthContainer + "px";
document.getElementById("main").style.height = setHeightContainer + "px";
let box = document.createElement("div");
main.appendChild(box);

box.classList.add("box");
box.setAttribute("id", "box");
document.getElementById("box").style.width = boxWidth + "px";
document.getElementById("box").style.height = boxHeight + "px";

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

function boxContainer() {
  console.log("hello");
  let boxWidth = 50;
  let boxHeight = 50;
  let box1 = document.createElement("div");
  main.appendChild(box1);
  box1.classList.add("box");
  box1.setAttribute("id", "box1");
  document.getElementById("box1").style.width = boxWidth + "px";
  document.getElementById("box1").style.height = boxHeight + "px";
}
boxContainer();

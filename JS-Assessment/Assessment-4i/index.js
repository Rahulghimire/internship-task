const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 500;
const BOX_COUNT = 5;
const SPEED = 10;
const BOX_WIDTH = 50;
const BOX_HEIGHT = 50;

function main() {
  let body = document.querySelector("body");
  const boxLists = initializeProgram(body);
  //startProgram(boxLists);
}

function initializeProgram(body) {
  const boxContainer = createBoxContainer(body);
  const boxLists = createBoxes(boxContainer);
  //return boxLists;
}

function createBoxContainer(body) {
  let boxContainer = document.createElement("div");
  boxContainer.setAttribute("class", "box-container");
  boxContainer.setAttribute("id", "box-container");
  boxContainer.style.width = CONTAINER_WIDTH + "px";
  boxContainer.style.height = CONTAINER_HEIGHT + "px";
  body.appendChild(boxContainer);
  return boxContainer;
}

function getPosition(value) {
  return Math.floor(((Math.random() * value) / SPEED) * SPEED);
}

function createBoxes(boxContainer) {
  let boxLists = [];
  for (let i = 0; i < BOX_COUNT; i++) {
    let getPositionX = getPosition(CONTAINER_WIDTH);
    let getPositionY = getPosition(CONTAINER_HEIGHT);
    console.log(getPositionX, getPositionY, i);
    let boxObj = createBox(getPositionX, getPositionY, i, boxContainer);
    let box = document.createElement("div");
    box.setAttribute("id", `box-${i + 1}`);
    box.classList.add("box");
    box.style.height = BOX_HEIGHT + "px";
    box.style.width = BOX_WIDTH + "px";
    boxContainer.appendChild(box);
    boxLists.push(boxObj);
  }
}
// function createBox(posX, posY, counter, boxContainer) {
//   const boxObj = {};

//   return boxObj;
// }

main();

// function drawboxes()

// main function
// body
// container
// boxes
//function startAnimate(parent,boxes)

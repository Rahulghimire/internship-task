const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 500;
const BOX_COUNT = 5;
const SPEED = 10;
let BOX_WIDTH = 50;
let BOX_HEIGHT = 50;

function main() {
  let body = document.querySelector("body");
  const boxLists = initializeProgram(body);
  startProgram(boxLists);
}
function initializeProgram(body) {
  const boxContainer = createBoxContainer(body);
  const boxLists = createBoxes(boxContainer);
  return boxLists;
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
// function getPosition(container, box) {
//   return Math.floor(Math.random() * container - box);
// }
// return Math.floor((Math.random() * coordinate) / SPEED) * SPEED;

function getPosition(coordinate) {
  return Math.floor((Math.random() * coordinate) / SPEED) * SPEED;
}

function createBoxes(boxContainer) {
  let boxLists = [];
  for (let i = 0; i < BOX_COUNT; i++) {
    let getPositionX = getPosition(CONTAINER_WIDTH);
    let getPositionY = getPosition(CONTAINER_HEIGHT);
    console.log(getPositionX, getPositionY);
    let box = document.createElement("div");
    box.setAttribute("id", `box-${i + 1}`);
    box.classList.add("box");
    box.style.height = BOX_HEIGHT + "px";
    box.style.width = BOX_WIDTH + "px";
    boxContainer.appendChild(box);
  }
  boxContainer.append(box);
  boxLists.push(box);
}
function createBox() {}

// function startProgram(list) {
//   let boxList = list;
//   setInterval(animateBox, 50);
//   function animateBox() {
//     for (let i = 0; i < boxList.length; i++) {
//       box = boxList[i];
//       let coordinateX = parseInt(box.style.left);
//       let coordinateY = parseInt(box.style.top);
//       let directionX = 1;
//       let directionY = 1;
//       // check x coordinate
//       if (coordinateX >= CONTAINER_WIDTH - BOX_WIDTH) {
//         directionX = -1;
//         coordinateX = coordinateX + SPEED * directionX;
//         box.style.left = `${coordinateX}px`;
//         // boxList[i] = box;
//       } else if (coordinateX <= 0) {
//         directionX = 1;
//         coordinateX = coordinateX + SPEED * directionX;
//         box.style.left = `${coordinateX}px`;
//         // boxList[i] = box;
//       }

//       // check y coordinate
//       if (coordinateY >= CONTAINER_HEIGHT - BOX_HEIGHT) {
//         directionY = -1;
//         coordinateY = coordinateY + SPEED * directionY;
//         box.style.top = `${coordinateY}px`;
//         // boxList[i] = box;
//       } else if (coordinateY <= 0) {
//         directionY = 1;
//         coordinateY = coordinateY + SPEED * directionY;
//         box.style.top = `${coordinateY}px`;
//         // boxList[i] = box;
//       }
//       coordinateX = coordinateX + SPEED * directionX;
//       coordinateY = coordinateY + SPEED * directionY;
//       box.style.left = `${coordinateX}px`;
//       box.style.top = `${coordinateY}px`;
//       // boxList[i] = box;
//     }
//   }
//   return boxList;
// }

main();

// function cerateboses(boxes){
//     for i=0 to 10
//     const posx=i*10;
//     const posty=(i+1)*10;
//     const box={
//         positionx:positionx;
//         positionx:posy;
//     }
// }
// function drawboxes()

// main function
// body
// container
// boxes
//function startAnimate(parent,boxes)

const projectJS = [
  {
    assignnumber: "#Profile",
    clink:
      " https://github.com/Rahulghimire/internship-task/blob/main/index.js",
    dlink: "https://rahulghimire.github.io/internship-task/",
  },
  {
    assignnumber: "#2",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/JS-Assessment/Assessment-2",
    dlink:
      "https://rahulghimire.github.io/internship-task/JS-Assessment/Assessment-2/index.html",
  },
  {
    assignnumber: "#Carousel",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/JS-Assessment/Assessment-3/index.js",
    dlink:
      "https://rahulghimire.github.io/internship-task/JS-Assessment/Assessment-3/index.html",
  },
  {
    assignnumber: "#Box Collision",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/JS-Assessment/Assessment-3/index.js",
    dlink:
      "https://rahulghimire.github.io/internship-task/JS-Assessment/Assessment-3/index.html",
  },
  {
    assignnumber: "#Ant Smasher",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/JS-Assessment/Assessment-3/index.js",
    dlink:
      "https://rahulghimire.github.io/internship-task/JS-Assessment/Assessment-3/index.html",
  },
  {
    assignnumber: "#Car Game",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/JS-Assessment/Assessment-3/index.js",
    dlink:
      "https://rahulghimire.github.io/internship-task/JS-Assessment/Assessment-3/index.html",
  },
  {
    assignnumber: "Final Project",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/JS-Assessment/JS-Final-Project/index.js",
    dlink:
      "https://rahulghimire.github.io/internship-task/JS-Assessment/JS-Final-Project/index.html",
  },
];

let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (let i = 0; i <= projectJS.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let header = document.createElement("h1");
  card.appendChild(header);
  header.append(projectJS[i].assignnumber);
  let text = document.createElement("div");
  card.appendChild(text);
  let code = document.createElement("a");
  text.appendChild(code);
  code.append("Code Link");
  code.setAttribute("href", projectJS[i].clink);
  text.classList.add("text");
  let div1 = document.createElement("div");
  card.appendChild(div1);
  let demo = document.createElement("a");
  div1.appendChild(demo);
  demo.append("Demo Link");
  demo.setAttribute("href", projectJS[i].dlink);
}

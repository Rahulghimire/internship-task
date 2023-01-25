const projectScss = [
  {
    assignnumber: "1",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/SCSS-Task",
    dlink:
      "https://rahulghimire.github.io/internship-task/SCSS-Task/index.html",
  },
];

let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (let i = 0; i <= projectScss.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let header = document.createElement("h1");
  card.appendChild(header);
  header.append(projectScss[i].assignnumber);
  let text = document.createElement("div");
  card.appendChild(text);
  let code = document.createElement("a");
  text.appendChild(code);
  code.append("Code Link");
  code.setAttribute("href", projectScss[i].clink);
  text.classList.add("text");
  let div1 = document.createElement("div");
  card.appendChild(div1);
  let demo = document.createElement("a");
  div1.appendChild(demo);
  demo.append("Demo Link");
  demo.setAttribute("href", projectScss[i].dlink);
}

const projectBootstrap = [
  {
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/Bootstrap-project",
    dlink:
      "https://rahulghimire.github.io/internship-task/Bootstrap-project/index.html",
  },
];

let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (let i = 0; i <= projectBootstrap.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let text = document.createElement("div");
  card.appendChild(text);
  let code = document.createElement("a");
  text.appendChild(code);
  code.append("Code Link");
  code.setAttribute("href", projectBootstrap[i].clink);
  text.classList.add("text");
  let div1 = document.createElement("div");
  card.appendChild(div1);
  let demo = document.createElement("a");
  div1.appendChild(demo);
  demo.append("Demo Link");
  demo.setAttribute("href", projectBootstrap[i].dlink);
}

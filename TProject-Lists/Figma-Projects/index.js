const projectFigma = [
  {
    dlink:
      "https://www.figma.com/file/dWKGTVH3fJo4uvXwoL7r9T/Intern--Design-Task?node-id=0%3A1",
  },
];

let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (let i = 0; i <= projectFigma.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let text = document.createElement("div");
  card.appendChild(text);
  text.classList.add("text");
  let div = document.createElement("div");
  card.appendChild(div);
  let demo = document.createElement("a");
  div.appendChild(demo);
  demo.append("Demo Link");
  demo.setAttribute("href", projectFigma[i].dlink);
}

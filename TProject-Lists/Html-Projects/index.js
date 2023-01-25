const projectHtml = [
  {
    assignnumber: "1",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/html-task/Assignment-1/Table",
    dlink:
      "https://rahulghimire.github.io/internship-task/html-task/Assignment-1/firstPage/",
  },
  {
    assignnumber: "2",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/html-task/Assignment-1/firstPage",
    dlink:
      "https://rahulghimire.github.io/internship-task/html-task/Assignment-1/htmlForms/",
  },
  {
    assignnumber: "3",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/html-task/Assignment-1/htmlForms",
    dlink:
      "https://rahulghimire.github.io/internship-task/html-task/Assignment-1/Table/",
  },
];

let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (let i = 0; i <= projectHtml.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let header = document.createElement("h1");
  card.appendChild(header);
  header.append(projectHtml[i].assignnumber);
  let text = document.createElement("div");
  card.appendChild(text);
  let code = document.createElement("a");
  text.appendChild(code);
  code.append("Code Link");
  code.setAttribute("href", projectHtml[i].clink);
  text.classList.add("text");
  let div1 = document.createElement("div");
  card.appendChild(div1);
  let demo = document.createElement("a");
  div1.appendChild(demo);
  demo.append("Demo Link");
  demo.setAttribute("href", projectHtml[i].dlink);
}

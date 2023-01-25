const projectCss = [
  {
    assignnumber: "1",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-1",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-1/index.html",
  },
  {
    assignnumber: "2",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-2",
    dlink1:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-2/index.html",
  },
  {
    assignnumber: "3",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-3",
    dlink1:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-3/index.html",
  },
  {
    assignnumber: "4",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-4",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-4/index.html",
  },
  {
    assignnumber: "5",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-5",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-5/index.html",
  },
  {
    assignnumber: "6",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-6",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-6/index.html",
  },
  {
    assignnumber: "7",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-7",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-7/index.html",
  },
  {
    assignnumber: "8",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-8",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-8/index.html",
  },
  {
    assignnumber: "9",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-9",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-9/index.html",
  },
  {
    assignnumber: "10",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-10",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-10/index.html",
  },
  {
    assignnumber: "11",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-11",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-11/index.html",
  },
  {
    assignnumber: "12",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-12",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-12/index.html",
  },
  {
    assignnumber: "13",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-13",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-13/index.html",
  },
  {
    assignnumber: "14",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-14",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-14/index.html",
  },
  {
    assignnumber: "15",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-15",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-15/index.html",
  },
  {
    assignnumber: "16",
    clink:
      "https://github.com/Rahulghimire/internship-task/tree/main/CSSTask/Assessment-16",
    dlink:
      "https://rahulghimire.github.io/internship-task/CSSTask/Assessment-16/index.html",
  },
];
let div = document.querySelector("div");
let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (let i = 0; i <= projectCss.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let header = document.createElement("h1");
  card.appendChild(header);
  header.append(projectCss[i].assignnumber);
  let text = document.createElement("div");
  card.appendChild(text);
  let code = document.createElement("a");
  text.appendChild(code);
  code.append("Code Link");
  code.setAttribute("href", projectCss[i].clink);
  text.classList.add("text");
  let div1 = document.createElement("div");
  card.appendChild(div1);
  let demo = document.createElement("a");
  div1.appendChild(demo);
  demo.append("Demo Link");
  demo.setAttribute("href", projectCss[i].dlink);
}

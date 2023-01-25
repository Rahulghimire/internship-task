let container = document.querySelector("div");
let header = document.createElement("h1");
header.append("Password Generator");
container.appendChild(header);

let resultContainer = document.createElement("div");
container.appendChild(resultContainer);
resultContainer.classList.add("result-container");
let span = document.createElement("span");
span.setAttribute("id", "result");
resultContainer.appendChild(span);

let button = document.createElement("button");
resultContainer.appendChild(button);
button.setAttribute("class", "btn");
button.setAttribute("id", "clipboard");
let i = document.createElement("i");

const obj = [
  { label: "Password Length", type: "number", id: "length", status: "" },
  {
    label: "Include uppercase",
    type: "checkbox",
    id: "uppercase",
    status: "checked",
  },
  {
    label: "Include Lowercase",
    type: "checkbox",
    id: "lowercase",
    status: "checked",
  },
  {
    label: "Include numbers",
    type: "checkbox",
    id: "numbers",
    status: "checked",
  },
  {
    label: "Include Symbols",
    type: "checkbox",
    id: "symbols",
    status: "checked",
  },
];

let settings = document.createElement("div");
container.appendChild(settings);
settings.setAttribute("class", "settings");

for (let i = 0; i <= obj.length - 1; i++) {
  let setting = document.createElement("div");
  settings.appendChild(setting);
  setting.setAttribute("class", "setting");
  let label = document.createElement("label");
  setting.appendChild(label);
  label.append(obj[i].label);
  let input = document.createElement("input");
  setting.appendChild(input);
  input.setAttribute("type", obj[i].type);
  input.setAttribute("id", obj[i].id);
  input.setAttribute("checked", "");
}

let btn = document.createElement("button");
settings.appendChild(btn);
btn.append("Generate Password");
btn.classList.add("btn", "btn-large");
btn.setAttribute("id", "generate");

let result = document.getElementById("result");
let length = document.getElementById("length");

let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generate = document.getElementById("generate");

let ArraysFromLowToHight = (min, max) => {
  let Arr = [];
  for (let i = min; i <= max; i++) {
    Arr.push(i);
  }
  return Arr;
};

let Ucase = ArraysFromLowToHight(65, 90);
let Lcase = ArraysFromLowToHight(97, 122);
let Num = ArraysFromLowToHight(48, 57);
let Syn = ArraysFromLowToHight(33, 38);

generate.addEventListener("click", () => {
  let initialPass = [];
  console.log("clicked");
  uppercase.checked ? (initialPass = [...initialPass, ...Ucase]) : "";
  lowercase.checked ? (initialPass = [...initialPass, ...Lcase]) : "";
  numbers.checked ? (initialPass = [...initialPass, ...Num]) : "";
  symbols.checked ? (initialPass = [...initialPass, ...Syn]) : "";

  let checkedItemList = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  console.log(checkedItemList.length);
  if (Number(length.value) < checkedItemList.length) {
    alert("Length and Selected donot match");
  } else {
    let Password = "";
    for (let i = 0; i < Number(length.value); i++) {
      Password += randomPassword(initialPass);
    }
    result.innerText = Password;
    console.log(Password);

    uppercase.checked = false;
    lowercase.checked = false;
    numbers.checked = false;
    symbols.checked = false;
  }
});

let randomPassword = (initialPass) => {
  let RandomNumber = Math.floor(Math.random() * initialPass.length);
  return String.fromCharCode(initialPass[RandomNumber]);
};

let randomPass = (min, max) => {
  return String.fromCharCode(min + Math.floor(Math.random() * (max - min + 1)));
};

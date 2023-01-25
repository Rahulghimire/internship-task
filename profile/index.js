const img = {
  src: "./rg.jfif",
};

let div = document.querySelector("div");
let imageContainer = document.createElement("div");
div.appendChild(imageContainer);
let image = document.createElement("img");
imageContainer.appendChild(image);
image.setAttribute("src", img.src);
imageContainer.classList.add("image-container");

let containerRight = document.createElement("div");
div.appendChild(containerRight);
containerRight.classList.add("containerRight");
let divname = document.createElement("div");
containerRight.append(divname);
let pname = document.createElement("h1");
divname.appendChild(pname);
pname.append("Rahul Ghimire");

let positon = document.createElement("h3");
containerRight.appendChild(positon);
positon.append("Developer");
let website = document.createElement("a");
containerRight.appendChild(website);
website.append("rahul-ghimire.com.np");
website.setAttribute("href", "rahul-ghimire.com.np");

let address = document.createElement("p");
containerRight.appendChild(address);
address.append("Location: Samakhushi, Kathmandu, Nepal");

let education = document.createElement("p");
containerRight.appendChild(education);
education.append("Bachelor:7th sem");

let experience = document.createElement("p");
containerRight.appendChild(experience);
experience.append("Experience:N/A");

let containerBottom = document.createElement("div");
div.appendChild(containerBottom);
containerBottom.classList.add("containerBottom");

let h1 = document.createElement("h1");
containerBottom.appendChild(h1);
h1.append("Personal Information");
let h3 = document.createElement("h3");
containerBottom.appendChild(h3);
h3.append("Name:");

let span = document.createElement("span");
h3.appendChild(span);
span.append("Rahul Ghimire");
span.classList.add("span");

let h4 = document.createElement("h3");
containerBottom.appendChild(h4);
h4.append("Nationality:");
let span2 = document.createElement("span");
h4.appendChild(span2);
span2.append("Nepali");

let h5 = document.createElement("h3");
containerBottom.appendChild(h5);
h5.append("Gender:");
let span3 = document.createElement("span");
h5.appendChild(span3);
span3.append("M");

let h6 = document.createElement("h3");
containerBottom.appendChild(h6);
h6.append("Residence Country:");
let span4 = document.createElement("span");
h6.appendChild(span4);
span4.append("Kathmandu,Nepal");

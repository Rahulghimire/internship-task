const linkProfile = {
  profile: "./profile",
};
let div = document.querySelector("div");
let profile = document.createElement("div");
profile.classList.add("profile");
div.appendChild(profile);
let profileLink = document.createElement("a");
profile.appendChild(profileLink);
profileLink.append("See Profile");
profileLink.setAttribute("href", linkProfile.profile);

const projectLists = [
  { projectName: "FIGMA TASK", link: "./TProject-Lists/Figma-Projects/" },
  { projectName: "HTML TASK", link: "./TProject-Lists/Html-Projects/" },
  { projectName: "CSS TASK", link: "./TProject-Lists/Css-projects/" },
  { projectName: "SCSS TASK", link: "./TProject-Lists/Scss-projects/" },
  {
    projectName: "BOOTSTRAP",
    link: "./TProject-Lists/Bootstrap-Projects/",
  },
  { projectName: "JS TASK", link: "./TProject-Lists/JS-Projects/" },
];

let cardContainer = document.createElement("div");
div.appendChild(cardContainer);
cardContainer.classList.add("card-container");

for (i = 0; i <= projectLists.length - 1; i++) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");
  let header = document.createElement("h1");
  card.appendChild(header);
  header.append(projectLists[i].projectName);
  let link = document.createElement("a");
  card.appendChild(link);
  link.append("Click me");
  link.setAttribute("href", projectLists[i].link);
  link.classList.add("link");
}

// Data

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// Exercise
const cards = document.querySelector(".cards");

for (let i = 0; i < team.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = createImg("img", team[i].image);
  const h2 = createText("h2", team[i].name);
  const para = createText("p", team[i].role);

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(para);
  cards.appendChild(card);
}

function createImg(tag, value) {
  const img = document.createElement(tag);
  img.src = `img/${value}`;
  return img;
}

function createText(tag, value) {
  const text = document.createElement(tag);
  text.innerHTML = value;
  return text;
}

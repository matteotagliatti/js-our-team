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

//
const cards = document.querySelector(".cards");

for (let i = 0; i < team.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = `img/${team[i].image}`;
  card.appendChild(img);

  const h2 = document.createElement("h2");
  h2.innerHTML = team[i].name;
  card.appendChild(h2);

  const p = document.createElement("p");
  p.innerHTML = team[i].role;
  card.appendChild(p);

  cards.appendChild(card);
}

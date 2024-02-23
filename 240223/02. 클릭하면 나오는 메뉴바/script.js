const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.onclick = () => {
  nav.classList.add("clicked");
  btn.classList.add("move");
};

const newp = document.createElement("p");
const newTypescript = document.createTextNode("Typescript");
newp.appendChild(newTypescript);

const ps = document.querySelectorAll("p")[0];

document.body.insertBefore(newp, ps);

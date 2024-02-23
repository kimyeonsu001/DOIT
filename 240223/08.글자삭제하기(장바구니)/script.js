// const dele = document.querySelector("span");
// const parentDele = dele.parentNode;

// const products = document.querySelectorAll("p");
// for (let product of products) {
//   product.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

const buttons = document.querySelectorALL("span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}

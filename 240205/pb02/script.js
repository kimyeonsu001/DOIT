const content = document.querySelectorAll(".content-menu li");
const contents = document.querySelectorAll(".tabs div");
btn.forEach((btn) => {
  content -
    menu.addEventListener("click", function () {
      function siblings(e) {
        const childern = e.parentElement.children;
        for (let i = 0; i < childern.length; i++) {
          childern[i].classList.remove("active");
        }
      }
      siblings(this);
      this.classList.add("active");

      contents.forEach(function (content) {
        content.classList.remove("active");
      });
    });
});

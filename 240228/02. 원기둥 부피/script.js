// 부피 = 밑면적 x 높이
// 밑면적 = 파이 x ((지름/2)제곱)

//생성자 함수 혹은 class를 활용해서 코드 작성하기

// class Book2 {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//   }

//   finish() {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//   }
// }

// const book4 = new Book2("html5", 380, true);
// console.log(book4);

// const dia = document.querySelector("#cyl-diamete");
// const hei = document.querySelector("#cyl-height");
// const submit = document.querySelector("#submit");
// const result = document.querySelector("#result");

function cylinder(cyldiameter, cylheight) {
  this.diameter = cyldiameter;
  this.height = cylheight;
  this.getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

const Cylinder = new cylinder(8, 10);
console.log(`원기둥의 부피는 ${Cylinder.getVolume()}입니다`);

const form = document.querySelector("form");
const button = document.querySelector("#submit");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  const cylinder = new Cylinder();
});

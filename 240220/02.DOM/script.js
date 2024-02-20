// ####### 01. 선택을 해보자 ########## //

// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("img");
// const users = document.querySelectorAll(".user");
// //################################# ▲ 복수를 가져올땐 All
// const address = users[1];
// //복수에서 하나만 ▲ 가져오는 방식중 하나
// console.log(address);

//*******위 와같지만*****옛날 구문법*******************//
// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementById("profile");
// ######################### ▲ 어차피 id밖에 안찾아서 #쓸 필요x
// const users = document.getElementsByClassName("user");
// console.log(users);
// ######################### ▲ 어차피 class밖에 안찾아서 #쓸 필요x

// ####### 02. 선택한걸 수정해보자 ########## //

// const desc = document.querySelector("#desc");
// // desc.innerText = "이름 : 홍길동";
// const descName = desc.innerText;
// console.log(descName);

// const descHtml = desc.innerHTML;
// console.log(descHtml);

// const descContext = desc.textContent;
// console.log(descContext);

//innerText 와 textContent 는 평상시에는 차이가 없지만 innerText 는 display:none 이 적용되어 있을 때는 보이지 않는다 //

// ####### 02. 선택한걸 이벤트 넣어보자 ########## //

//이벤트 핸들러 => 이벤트 작동 실행!!

// const title = document.querySelector("h1");
// // title.onclick = function () {
// //   title.innerText = "마이 프로필";
// // };
// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");

// const pfImg = document.querySelector("#profile img");
// console.log(pfImg);
// pfImg.onclick = () => (pfImg.src = "./images(16)/pf2.png");

const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user");

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "#fff";
};

// const clickedTrue = userName.classList.contains("clickeds");

// ######클릭하고 안하고의 차이 ####### //
// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

userName.onclick = () => {
  userName.classList.toggle("clicked");
};

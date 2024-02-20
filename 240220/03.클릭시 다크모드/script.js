//1. 일단 바꿔주기 스타일
//2. 다시 지우기
//3. 일단 선언 부터 하기
const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");
//4 console로 둘 다 제대로 찾아왔는지 확인

// 그 다음 이렇게 ▼
// button.onclick = () => {
//   body.classList.toggle("dark");
// };

// if 문을 이용한다면 ▼
button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};

//1. 버튼 찾기
//2. 하단 찾기
//3. 버튼에 이벤트

const btn = document.querySelector("#view");
const detail = document.querySelector("#detail");

//1. 각자 필요부분을 선언해줍니다

//2. 가상클래스에 display=none 을 적용해줍니다

btn.onclick = () => {
  detail.classList.toggle("clicked");
};

//3 이런구도로 작성해줍니다

const heading = document.querySelector("h1");
const parentH1 = heading.parentNode;

// heading.addEventListener("click", () => {
//   list.remove();
// });

// this객체
//단, 조건!!! => 현재 선택한 li 태그를 this 를 객체로 대체해서 사용할 수 있음, 단, 클래스 함수를 사용할 때 만 가능 => 화살표 함수를 사용할 때에는 THIS 객체가 이벤트를 실행시키는 당사자 = 주체가 되는것이 아니라 WINDOW 객체가 THIS가 된다

const items = document.querySelectorAll("li");
for (let item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}

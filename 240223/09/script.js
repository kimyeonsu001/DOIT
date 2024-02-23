//1. 선언부터

// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const submit = document.querySelector("input[type='submit']");
// const booklist = document.querySelector("#booklist");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const newli = document.createElement("li");
//   // {""} 넣는거 조심하기(문자열로 만들지 말기)!!!!!
//   //.value 넣는거 생각하기!!!!!
//   const textNode = (booklist.innerText = `${title.value}-${author.value}`);
//   newli.appendChild(textNode);
// });

// const dele = createElement("")

// const buttons = document.querySelectorALL("span");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     this.parentNode.remove();
//   });
// }

//#################선생님이랑 같이 하는거 #################//

//1. 제목 & 저자 값을 찾아와야 한다. (이때부터 .value 가 필요하다는걸 인지해야함)
//2. 이벤트가 작동하도록 해주는 저장하기 버튼 정의 e.preventDefault
//ㄴ button을 선택하고 클릭이라는 이벤트로 갈것인지?
//ㄴ form을 쓰고 submit으로 할것인지?
//3. 찾아온 값을 출력할 수 있고록 도와주는 이벤트 함수(addEventListener)
//4. 출력할 공간에 대한 정의 필요 (queryselector)
//5. 삭제하기 버튼 정의(createElement, appendChild)
//6. 삭제하기 버튼이 복수의 갯수로 생성되기 떄문에 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위해서 => this (*클래스 함수 vs 화살표 함수 결정되는것)
//7. 삭제하기 버튼 클릭시 , 목록삭제 이벤트 함수 필요(parentNode, removeChild)

const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>
  `;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});

//close 클릭시 container display none 되고 open이 display block 됨

//2. close onclick시에 close랑 container none 됨
//3. open창 block됨

//1. const로 close, container, open 선언하기
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const container = document.querySelector(".container");

//2. 이동할 루트 만들기
const openFnc = () => {
  openBtn.style.display = "none";
  container.style.display = "flex";
};
const closeFnc = () => {
  container.style.display = "none";
  openBtn.style.display = "block";
};

//2 [클릭]하면 [이동할 루트] 정하기
openBtn.onclick = openFnc;
closeBtn.onclick = closeFnc;

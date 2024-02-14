//1 소비자가 입력한 소비자가를 찾아오기
//2 사용자가 입력한 할인률값을 찾아오기
//3 사용자가 할인가격계산하기 버튼 인식해주기
//3-2 버튼을 클릭한다면, 이벤트 작동
//4 계산 이벤트를 정의한다
//5 할인된 가격출력하기

// const btn = document.querySelector("#button");
// const showResult = document.querySelector("#showResult");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const originPrice = document.querySelector("#price").value;
//   const rate = document.querySelector("#rate").value;
//   const savedPrice = originPrice * (rate / 100);
//   const resultPrice = originPrice - savedPrice;
//   showResult.innerHTML = `상품의 원래 가격은 $ {originPrice}이고, 할인률은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매 가능합니다`;
// });

let a = 10;
let b = 3;
let result = a > b ? "javascript" : "hello";

console.log(result);

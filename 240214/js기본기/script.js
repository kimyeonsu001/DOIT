// prompt() : 사용자에게 어떤값을 받아올 수 있도록 해주는 함수
//       ㄴ 사용자가 아무리 숫자를 입력해도 문자로 변환됨

//***문자열과 숫자형을 더하면 무조건 문자열이 됨!
// let str = "20"; //""있으면 무조건 문자취급
// let num = 10;

// let result01 = str - num;
// console.log(result01);
//결과 10 -> 숫자계산됨

// let result = str + num;
// console.log(result);
//결과 2010 -> 문자열로계산됨
// 오직 더하기 연산자에만 이런 문자열이 됨

// let result = Number(str) + num;
// console.log(result);
// Number():  무조건 숫자로 바뀌어줌

// console.log(Number(true));
// 1로 나옴/ 1은 참을 뜻함
// console.log(Number(false));
// 당연히 0으로 나옴

// console.log(Number("Hi!"));
// naN 으로 나옴/아예 받아들이지 못함
// console.log(Number("20"));
//이런경우는 숫자로 바꿔줌

//Number() vs parseInt() vs parseFloat()

//parseInt  정수로 바꿔줌
// const userHot = parseInt(prompt("당신의 체온은?"));
// console.log(userHot);

//소수점까지 드러남
// const userHot01 = parseFloat(prompt("당신의 체온은?"));
// console.log(userHot01);

// const Hot = Number(prompt("화씨온도입력"));
// const cel = ((Hot - 32) / 1.8).toFixed(1);

// document.write(`화씨${Hot}도는 섭씨 ${cel} 도 입니다!`);
// let a = 10;
// a = a++;
// // a = --a;

// console.log(a);

//연결 연산자
// let name = "홍길동";

// console.log(name + "님 안녕하세요");

// 논리 연산자

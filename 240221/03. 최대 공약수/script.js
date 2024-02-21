//1 사용자가 입력한 두 개의 숫자를 찾아온다
//2 출력될 공간을 정의한다
//3 버튼을 클릭했을때, result 공간에 값이 출력된다
//4 값을 출력하기 위한 연산작업 을 한다
//5 최대공약수에 대한 개념이 필요하다
//###########///
// 1, 필요한 아이들 각자 선언을 해준다.
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");
const button = document.querySelector("#calc");

//2 최대공약수를 구하기 위한 연산작업
const get = (number1, number2) => {
  const max = number1 > number2 ? number1 : number2;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = get(number1.value, number2.value);
};
          
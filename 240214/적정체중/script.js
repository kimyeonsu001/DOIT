const user00 = prompt("당신의 이름을 말씀해주세요", "ex.김코딩");
const user01 = Number(prompt("키를 입력해주세요", "ex.150cm"));
const user02 = Number(prompt("몸무게를 입력해주세요", "ex.60kg"));

const normal = (user01 - 100) * 0.9;
let result = user02 >= normal - 5 && normal <= normal + 5;
result = result ? "적정체중입니다" : "적정체중이 아닙니다";

document.write(`${user00}님 ${result}`);

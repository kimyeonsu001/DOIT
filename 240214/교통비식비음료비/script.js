const traffic = Number(prompt("교통비는?"));
const eat = Number(prompt("식비는?"));
const drink = Number(prompt("음료비는?"));

const sum = traffic + eat + drink;
let result = sum < 10000;
const result1 = 10000 - sum;
const result2 = sum - 10000;

result = result ? `${result1}원 남았어요!` : `${result2}원 초과했어요`;
document.write(result);

//사용자가 이메일 주소를 입력하면 result 공간에 사용자의 이메일 정보를 출력하게 해주세요
//단 이메일 주소중 중간에 @ 앞의 내용을 세자리 까지만 출력해주세요
//그리고 네번째 자리 부터는 ...온점으로 표기해주세요
//ex abcde@naver.com =>  abc...@naver.com

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = "";
  let domain = "";

  if (userEmail.value !== "") {
    userName = userEmail.value;
    userName = userName.substring(0, 3);
    domain= userEmail.vlau
  }
});

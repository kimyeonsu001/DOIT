const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");

srcNode.value =
  "https://img.sbs.co.kr/newsnet/etv/upload/2022/09/19/30000790950.jpg";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);

const str1 = "자바스크립트 200제";
const str2 = new String("자바스크립트 200제");

console.log(typeof str1);
console.log(typeof str1);

console.log(str1 === "자바스크립트 200제");
console.log(str2 === new String("자바스크립트 200제"));

console.log(str1.valueOf()); //valueOf 는 내장객체에 정의된 원시형 값을 리턴한다.
console.log(str2.valueOf());

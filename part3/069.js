const s = "This will be the end of Wakanda";

console.log(s.substring(13));
console.log(s.substring(13, 20));
console.log(s.substring(0));
console.log(s.substring(0, -20)); // substring은 음수가있으면 실행하지 않는다.
console.log(s.substring(50)); //문자열 길이를 초과하면 빈 값을 반환한다.
console.log(s.substring(20, 13)); // (13, 20)으로 변환해서 수행한다.

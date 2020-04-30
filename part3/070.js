const s = "Wakanda Forever!!!";
console.log(s.substr(8));
console.log(s.substr(8, 7)); //8번째 인덱스문자부터 뒤이어 7개의 문자를 반환한다.
console.log(s.substr(0));
console.log(s.substr(-10)); //음수면 뒤에서부터 10번째부터 마지막까지 반환한다.
console.log(s.substr(0, -3)); //두번째 인자에 음수를 넣으면 실행하지 않는다.
console.log(s.substr(30)); //빈 값을 반환
console.log(s.substr(0, 30));

var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };
//객체 비구조화 할당
var { a, c } = obj; //좌측에 선언했던 변수랑 매칭되는 값이 할당된다. a=1, c=30

console.log("a >>> ${a}");
console.log("c >>> ${c}");

var { a: newA = 10, f: newF = 5 } = obj; //a에 해당하는 값이 없으면 newA=10, 있으면 newA=1
console.log(`newA >>> ${newA}`); //1
console.log(`newF >>> ${newF}`); //5

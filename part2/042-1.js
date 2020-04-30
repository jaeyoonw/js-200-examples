const CONST_USER = { name: "jay", age: 30 };
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = "jay2"; //객체의 속성 변경
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER = { name: "bbo", age: 25 }; //객체 재할당

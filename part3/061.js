const str = "Javascript";
const strObj = new String("Javascript");
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function() {};
const arr = [10, 20, 30];
const obj = { a1: "test" };
const empty = null;
const notCalled = undefined;

//typeof는 원시자료형(string,number,boolean,null)과 객체를 구분할때 사용하는것이 좋다.
console.log(typeof str === "string"); //true
console.log(typeof strObj === "object"); //true
console.log(typeof num === "number"); //true
console.log(typeof numObj === "object"); //true
console.log(typeof bool === "boolean"); //true
console.log(typeof boolObj === "object"); //true
console.log(typeof func === "function"); //true
console.log(typeof arr === "object"); //true
console.log(typeof obj === "object"); //true
console.log(typeof empty === "object"); //true
console.log(typeof notCalled === "undefined"); //true

//instanceof는 객체를 확인할 때 자주 쓰인다. 하지만 원시자료형에는 적합하지 않다.
console.log(str instanceof String); //false
console.log(strObj instanceof String); //true

this.valueA = "a";
console.log(valueA); //a

valueB = "b";
console.log(this.valueB); //b

function checkThis() {
  console.log(this); //this는 window를 가르킨다.
}
function checkThis2() {
  "use strict";
  console.log(this);
}
checkThis(); //Window
checkThis2(); //undefined

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const product1 = Product("가방", 2000); //new 키워드가 없으면 this는 전역 객체인 window를 가르킨다.
console.log(window.name); //가방
console.log(window.price); //2000

const product2 = {
  name: "가방2",
  price: 3000,
  getVAT() {
    return this.price / 10;
  }
};
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2); //300

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);

var a = 10;
console.log(a); //10

const print = function() {
  var b = 20;
  if (true) {
    var c = 30;
  }
  console.log(c);
};

print(); //30, 함수내에서 접근하기때문에 가능
console.log(b); // 에러, 함수 밖에서 접근하기때문에 접근 불가능

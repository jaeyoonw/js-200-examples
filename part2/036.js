function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  console.log(arguments instanceof Array); // arguments는 배열이 아니다.
  return total;
}
var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
  var newArr = Array.prototype.slice.call(arguments); //argument객체의 요소들을 복사하는 새로운 배열이 만들어집니다.
  console.log(newArr);
  console.log(newArr.indexOf("b")); //인덱스 반환
  console.log(arguments.indexOf("b")); //인덱스 반환x 배열이 아니기 때문에
}

testArg("a", "b");

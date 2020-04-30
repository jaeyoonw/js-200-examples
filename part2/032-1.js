var arr = [1, 2, 3, 4, 5];
var [a, b, ...rest] = arr; //배열 비구조화 할당, 여러값을 한번에 가져오고 싶을때 유용하다.

console.log(`0) rest >>> ${rest}`);

var [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) a >>> ${f}`);

var getArr = function() {
  return [1, 2, 3, 4, 5, 6];
};

// function getArr() {
//   return [1, 2, 3, 4, 5, 6];
// }

[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);

function sum(...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(args.indexOf(1)); // 0
  return total;
}
console.log(sum(1, 2, 3)); // 6

function sum2(a, b, ...others) {
  var total = a + b;
  for (var i = 0; i < others.length; i++) {
    console.log(others);
    total += others[i];
  }
  return total;
}
console.log(sum2(1, 2)); // 3, others는 빈 배열이 된다.
console.log(sum2(1, 2, 3, 4)); // 10

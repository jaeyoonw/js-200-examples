var a = "global";

function print1() {
  console.log(a);
}

function print2() {
  var a = "local";
  console.log(a); // "local"
  print1();
}

print1(); // "global"
print2(); // "global", 자바스크립트는 렉시컬 스코프이기 때문에 코드를 작성하는 시점에 스코프가 확정이 된다. 이미 전역 a를 참고하고 있음

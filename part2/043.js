var person = "harin";

function print() {
  var person2 = "jay";

  function innerPrint() {
    console.log(person); //print 실행 컨텍스트의 환경에서 찾아 출력
    console.log(person2);
  }

  innerPrint(); //innerPrint실행컨텍스트 생성
  console.log("print fininshed"); //innerPrint실행컨텍스트 스택에서 제거됨
}

print(); //print 실행컨텍스트 생성
console.log("finished"); //전역 실행 컨텍스트만 남게됨

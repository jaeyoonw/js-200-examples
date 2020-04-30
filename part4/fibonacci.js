function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

onmessage = function (e) {
  // onmessage에 함수를 등록한다.
  // 메인스크립트에서 postMessage로 메시지를 전달하면 이 함수가 실행된다.
  const num = e.data.num;
  console.log("메인 스크립트에서 전달 받은 메시지", e.data);
  if (num == null || num === "") {
    throw new Error("숫자를 전달하지 않았습니다.");
  }
  const result = fibonacci(num);
  this.postMessage(result); // postMessage를 이용하야 메인스크립트에 전달한다.
};

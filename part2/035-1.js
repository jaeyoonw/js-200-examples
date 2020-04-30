function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값이야";
  console.log("숫자형 값으로 확인되었습니다.");
}

try {
  checkNumber(100);
  checkNumber("Wrong type");
} catch (error) {
  console.log(error);
} finally {
  console.log("프로그램 완료");
}

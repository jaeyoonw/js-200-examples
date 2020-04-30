const str = "12345678";

const distritubedArr = Array.from(str); // 배열로 변환한다.
console.log(distritubedArr);

const modifiedArr = Array.from(distritubedArr, e1 => e1 * 2);
console.log(modifiedArr);

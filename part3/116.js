// const testStringify = {
//   stringifiedNum: JSON.stringify(13.1), // JSON객체를 String으로 변환해준다.
//   stringifiedStr: JSON.stringify("Kiss Carnival"),
//   stringifiedBln: JSON.stringify(false),
//   stringifiedArr: JSON.stringify([2003, 2017])
// };

// for (var key in testStringify) {
//   console.log(testStringify[key]);
// }

const obj = {
  drama: "PET",
  season: 2017,
  casting: ["koyuki", "matsumoto jun"],
  character: ["sumire", "momo"]
};

console.log(JSON.stringify(obj)); // 객체 자체가 문자열로 변환이 되버린다.

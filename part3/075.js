const str = "Carpe diem, seize the day";
console.log(`"e"는 ${str.indexOf("e")} 번째 인덱스에 있습니다.`);
console.log(`대문자 "C"는 ${str.indexOf("C")} 번째 인덱스에 있습니다.`);

const arr = ["Carpe", "diem", "seize", "the", "day"];
const superBee = arr => {
  var count = 0;
  arr.forEach(function(str) {
    if (str.indexOf("e")) {
      count++;
    }
  });
  return count;
};

console.log(`${arr}에 들어있는 "e"의 개수는 ${superBee(arr)}개 입니다.`);

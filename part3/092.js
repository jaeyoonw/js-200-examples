const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
  { id: 2, name: "leo" },
  {
    id: 0,
    name: "daniel"
  },
  {
    id: 3,
    name: "asher"
  },
  {
    id: 4,
    name: "chloe"
  },
  {
    id: 1,
    name: "jaeyoon"
  }
];

numArr1.sort(function(a, b) {
  return a - b; //비교값 > 0 이면 오름차순
});

numArr2.sort(function(a, b) {
  return b - a;
});
numArr2.sort(function(a, b) {
  return (a = b);
});
objArr.sort(function(a, b) {
  if (a.name > b.name) return 1;
  else if (b.name > a.name) return -1;
  else return 0;
});

console.log(` 오름차순 : ${numArr1}`);
console.log(` 내림차순 : ${numArr2}`);

console.log(objArr);

objArr.sort(function(a, b) {
  return a.id - b.id; //return 값이 양수면 자리를 바꿔야하고 음수거나 0이면 이미 정렬된 상태.
});
console.log(objArr);

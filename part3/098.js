const arr = [
  { id: 0, name: "혜림", age: 6 },
  {
    id: 1,
    name: "현일",
    age: 3
  },
  {
    id: 2,
    name: "현아",
    age: 5
  },
  {
    id: 3,
    name: "우람",
    age: 2
  }
];

const arr2 = arr.map(el => {
  //배열의 요소들을 일괄 변경할때에는  map메소드를 사용한다.
  el.age = el.age + 1;
  return el;
});

const arr3 = arr.map(el => el.name);

console.log(arr2);
console.log(arr3);

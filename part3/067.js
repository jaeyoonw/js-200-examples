const sentences = [
  " ABC abc",
  "ABC abc     ",
  ` first 
        second third
        forth

`
];

const filterSentence = sentences => {
  const filtered = [];
  sentences.forEach(s => {
    filtered.push(s.trim()); // trim함수는 문자열 양끝 공백, 탭, 줄바꿈을 제거한다.
  });
  return filtered;
};

console.log(filterSentence(sentences));
console.log(sentences);

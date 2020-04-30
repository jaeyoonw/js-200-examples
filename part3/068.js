const sentence = "The sun will shine on us again";
console.log(sentence.slice(13)); //shine 부터
console.log(sentence.slice(13, 24)); //us 까지
console.log(sentence.slice(0));

console.log(sentence.slice(0, -23));
console.log(sentence.slice(50)); //빈 값 반환해줌
console.log(sentence.slice(7, 2)); //수행되지 않음

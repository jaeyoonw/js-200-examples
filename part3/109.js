console.log(Math.floor(Math.random() * 5)); // 0 ~ 4

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (var i = 0; i < 5; i++) {
  console.log(generateRandom(1, 10));
}

for (var i = 0; i < 5; i++) {
  console.log(generateRandom(10, 100));
}

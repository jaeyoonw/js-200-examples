const capitals = `Prague, Czech Republic
Copenhagen, Denmark
Paris, France
Madrid, Spain
Rome, Italy`;

capitals.split("\n").forEach(el => {
  // '\n'을 기준으로 나눠서 배열에 넣는다.
  const capital = el.split(",")[0];
  const country = el.split(",")[1];
  console.log(`${capital} is in ${country}`);
});

console.log(capitals.split("\n"));

var obj = {};

for (var i = 0; i < 4; i++) {
  obj["key" + i] = i; // []안에 들어간 부분이 속성명or키,  i가 값
}

console.log(obj);

var profile = "chloe:30";
var person = {
  [profile]: true,
  [profile.split(":")[0]]: profile.split(":")[1]
};

console.log(person);

var profile2 = "jaeyoon:25";

var person2 = {
  profile: true,
  [profile.split(":")[0]]: profile.split(":")[1]
};

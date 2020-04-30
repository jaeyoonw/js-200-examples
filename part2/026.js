var str = 5 + "1";
var num = +str;
console.log(num);
console.log(typeof num);

str = String(num);
console.log(str + "wow");
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);

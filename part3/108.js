const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2); //2진수를 10진수로 변환
const dexByOct = parseInt(oct, 8); //8진수를 10진수로 변환
const dexByHex = parseInt(hex, 16); //16진수를 10진수로변환
const hexByOct = parseInt(oct, 8).toString(16); //8진수를 10진수로 변환한다음 다시 16진수로 변환

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByHex);
console.log(hexByOct);

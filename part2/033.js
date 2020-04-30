const symbol = Symbol();
const hello = Symbol("hello");

console.log(Number(3) === Number(3));
console.log(Symbol("symbol") === Symbol("symbol"));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());
console.log(hello);

console.log("");

const nationality = Symbol("nationlity");
const user = {
  name: "jay"
};
user[nationality] = "korean";
console.log(user[nationality]);

for (let key in user) {
  console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

console.log("");

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);

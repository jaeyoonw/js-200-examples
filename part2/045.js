let user = {
  name: "jaeyoon"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name"); //속성에 대한 정보를 담고있음. 속성기술자
//console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, "name", {
  value: "jeado",
  enumerable: true, //for문을 통해 나열할수있는지의 가능여부
  configurable: true, //속성기술자륿 변경할수있는지 가능여부
  writable: false //값을 변경할수있는지의 여부
});
//console.log(user2.name);
user2.name = "bbo";
//console.log(user2.name);

let user3 = {
  name: "jeado",
  toString() {
    return this.name;
  }
};
Object.defineProperty(user3, "toString", {
  enumerable: false
});
for (let key in user3) {
  console.log(key);
}

let user4 = {};
Object.defineProperty(user4, "name", {
  value: "taeko",
  configurable: false
});
delete user4.name;

console.log(user4);
Object.defineProperty(user4, "name", {
  writable: true
});

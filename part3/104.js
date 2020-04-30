let obj = {};

obj.title = "IDOL";
obj = Object.freeze(obj);
obj.title = "Euphoria";

console.log(obj);

const changeUntilNum = (obj, num) => {
  "use strict";

  while (true) {
    console.log(obj);

    if (obj.age >= num) {
      obj = Object.freeze(obj); //객체가 변경되지 못하도록 동결시킨다.
    }
    obj.age += 1;
  }
};

let profile = { name: "지연", age: 25 };
changeUntilNum(profile, 30);

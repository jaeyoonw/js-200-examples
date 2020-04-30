var family = {
  address: "Seoul",
  members: {},
  addfamily: function(age, name, role) {
    this.members[role] = {
      age: age,
      name: name
    };
  },
  getHeadCount: function() {
    return Object.keys(this.members).length; //객체 members의 길이 구하는 법
  }
};

family.addfamily(25, "jaeyoon", "developer");
family.addfamily(25, "dangdangi", "dog");

var printMemebers = function() {
  var members = family.members;
  for (role in members) {
    console.log(
      "role => " +
        role +
        ", name => " +
        members[role].name +
        ", age => " +
        members[role].age
    );
  }
};
printMemebers();
console.log("\n");

var members = family.members;
//객체에 새로운 속성을 추가, 수정하는 방법
members["dog"] = { age: 3, name: "hyun" };
members.niece = { age: 5, name: "lyn" };
members.kidmilli = { age: 28, name: "최원재" };

//객체를 지우는 방법 키워드 delete 사용
delete members.developer;
printMemebers();

// console.log(family.getHeadCount());
// console.log(Object.keys(family.members));

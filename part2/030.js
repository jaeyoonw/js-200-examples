var address = "Incheon";
var members = {};
var addFamily = function(age, name, role) {
  this.members[role] = { age, name };
};

var getHeadcount = function() {
  return Object.keys(this.members).length;
};

var family = { address, members, addFamily, getHeadcount };

family.addFamily(30, "giriboy", "producer");
family.addFamily(28, "kidmilli", "rapper");
family.addFamily(25, "jaeyoon", "student");

console.log(family.getHeadcount());
console.log(family);

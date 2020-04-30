const studentProto = {
  gainExp: function() {
    this.exp++;
  }
};

const harin = {
  name: "harin",
  age: 10,
  exp: 0,
  __proto__: studentProto
};

const bbo = {
  name: "bbo",
  age: 20,
  exp: 10,
  __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);

harin.__proto__.gainExp();
console.log(harin);

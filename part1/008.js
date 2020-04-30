const x = 5;
const y = "five";
const isTrue = true;
const empty = null;
const nothing = "";
const sym = Symbol("me");

const item = {
  price: 5000,
  count: 10
}; //객체

const member = ["taeko"];
const addMember = function(saram) {
  member.push(saram);
};

addMember("jaeyoon");
alert(member);

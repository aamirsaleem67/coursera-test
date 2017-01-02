var x1 = function () {
  // do something, PLEASE!
  return "Blah!";
};
console.log(x1);

var x2 = x1();
console.log(x2);

function x3(arg) {
  return arg; // Ha-ha! That's all I do!
}
console.log(x3);

var x4 = x3(x1);
console.log(x4);
var x5 = x3(x2);
console.log(x5);

var x6 = x3(x1());
console.log(x6);

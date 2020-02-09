// explict type declaration
var n1 = 100;
// implicit type declaration based on initial valud
var n2 = 1000;
console.log(typeof (n1) + '  ' + typeof (n2));
var v1 = "dddd";
var v2 = "ddd";
var a1;
a1 = 100;
console.log(a1 + "  " + typeof (a1));
a1 = "dddd";
console.log(a1 + "  " + typeof (a1));
a1 = true;
console.log(a1 + "  " + typeof (a1));
a1 = {}; // object
console.log(a1 + "  " + typeof (a1));
a1 = [1, 2, 3];
console.log(a1 + "  " + typeof (a1));
a1 = new Date(2020, 2, 20);
console.log(a1 + "  " + typeof (a1));
// Union types
var b1;
b1 = 100;
console.log(b1 + "  " + typeof (b1));
b1 = 'dddd';
console.log(b1 + "  " + typeof (b1));
// =============================================================================================
// Equality operators
var r1 = 1 == "1"; // value equality
console.log(r1);
var r2 = 1 === "1";
console.log(r2); // deep equality (value + type)
// parsing
console.log(parseInt("333oooodd")); // --> 333
console.log(parseFloat("333.87oooodd")); // --> 333.87
console.log();
console.log();
console.log();
// ==========================================================================================
var a2 = { x: 10 };
console.log('Value a2.x = ' + a2.x);
var a3 = a2; // assigning a2 to a3, the deep copy with same reference, 
// a2 and a3 points to same object
console.log('Value a3.x = ' + a3.x);
a3.x = 300;
console.log('After update a3.x then Value of a3.x = ' + a3.x);
console.log('After update a3.x then Value of a2.x = ' + a2.x);
//create a new blank clone of a2 with value of x, and a3 will point to new objet 
var a4 = Object.assign({}, a2);
console.log('Value a4.x = ' + a4.x);
a4.x = 900;
console.log('After update a4.x then Value of a4.x = ' + a4.x);
console.log('After update a4.x then Value of a2.x = ' + a2.x);

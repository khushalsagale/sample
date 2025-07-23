// variables.ts
// String
var firstName = "Alice";
console.log("First Name:", firstName);
// Number
var age = 30;
console.log("Age:", age);
// Boolean
var isLoggedIn = true;
console.log("Is Logged In:", isLoggedIn);
// Array
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
// Tuple
var person = ["Bob", 25];
console.log("Tuple:", person);
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log("Enum Direction:", Direction.Up);

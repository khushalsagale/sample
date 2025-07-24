// TYPE INFERENCE (TypeScript guesses the type)
var inferredName = "Ankit"; // inferred like as string
var inferredAge = 23; // inferred like as number
var isMember = true; // inferred like as boolean
function inferredMultiply(x, y) {
    if (x === void 0) { x = 2; }
    if (y === void 0) { y = 3; }
    return x * y; // return type inferred as number
}
// EXPLICIT TYPES (You define the type)
var userName = "vishal";
var userAge = 28;
var hasSubscription = false;
function explicitMultiply(a, b) {
    return a * b;
}
// Console Output
console.log("Inferred Name:", inferredName);
console.log("Explicit Name:", userName);
console.log("Inferred Multiply:", inferredMultiply());
console.log("Explicit Multiply:", explicitMultiply(4, 5));

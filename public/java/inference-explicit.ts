// TYPE INFERENCE (TypeScript guesses the type)

let inferredName = "Ankit";         // inferred like as string
let inferredAge = 23;               // number
let isMember = true;                // boolean

function inferredMultiply(x = 2, y = 3) {
  return x * y;                     // return type inferred as number
}

// EXPLICIT TYPES (You define the type)

let userName: string = "vishal";
let userAge: number = 28;
let hasSubscription: boolean = false;

function explicitMultiply(a: number, b: number): number {
  return a * b;
}

// Console Output
console.log("Inferred Name:", inferredName);
console.log("Explicit Name:", userName);

console.log("Inferred Multiply:", inferredMultiply());
console.log("Explicit Multiply:", explicitMultiply(4, 5));


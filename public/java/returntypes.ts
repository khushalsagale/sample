// Named function with a return type of number
function add(a: number, b: number): number {
  return a + b;
}

// Function with return type string
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Void return type (no return value)
function logMessage(message: string): void {
  console.log("LOG:", message);
}

// Function with optional parameter and default value
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Function with union return type
function parseInput(input: string): number | null {
  const parsed = Number(input);
  return isNaN(parsed) ? null : parsed;
}

// Usage examples
console.log(add(10, 5));             // 15
console.log(greet("Alice"));         // Hello, Alice!
logMessage("This is a log.");        // LOG: This is a log.
console.log(multiply(3));            // 6
console.log(parseInput("123"));      // 123
console.log(parseInput("abc"));      // null

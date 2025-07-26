// Numeric array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// String array
let fruits: string[] = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);

// Mixed type array using union
let mixed: (number | string)[] = [1, "two", 3, "four"];
console.log("Mixed:", mixed);

// Array of objects
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.log("People:", people);

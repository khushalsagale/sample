// Define two interfaces
interface Cat {
  name: string;
  meow(): void;
}

interface Dog {
  name: string;
  bark(): void;
}

// A function to determine if the pet is a Cat
function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

// Function using the type guard
function interactWithPet(pet: Cat | Dog) {
  if (isCat(pet)) {
    pet.meow(); // TypeScript knows pet is Cat here
  } else {
    pet.bark(); // TypeScript knows pet is Dog here
  }
}

// Example usage
const myCat: Cat = {
  name: "Whiskers",
  meow: () => console.log("Meow!")
};

const myDog: Dog = {
  name: "Fido",
  bark: () => console.log("Woof!")
};

interactWithPet(myCat); // Output: Meow!
interactWithPet(myDog); // Output: Woof!

// A function to determine if the pet is a Cat
function isCat(pet) {
    return pet.meow !== undefined;
}
// Function using the type guard
function interactWithPet(pet) {
    if (isCat(pet)) {
        pet.meow(); // TypeScript knows pet is Cat here
    }
    else {
        pet.bark(); // TypeScript knows pet is Dog here
    }
}
// Example usage
var myCat = {
    name: "Whiskers",
    meow: function () { return console.log("Meow!"); }
};
var myDog = {
    name: "Fido",
    bark: function () { return console.log("Woof!"); }
};
interactWithPet(myCat); // Output: Meow!
interactWithPet(myDog); // Output: Woof!

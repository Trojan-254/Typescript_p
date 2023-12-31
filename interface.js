//Define an interface Person with properties: name (string) and age (number).
// Create a function that takes an argument of type Person and prints their details.
function showPerson(sP) {
    console.log("The person's name is ".concat(sP.name));
    console.log("The person's age is ".concat(sP.age));
}
showPerson({ name: "Hanafi", age: 22 });

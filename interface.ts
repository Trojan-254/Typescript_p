//Define an interface Person with properties: name (string) and age (number).
// Create a function that takes an argument of type Person and prints their details.

interface Person{
    name: string;
    age: number
}

function showPerson(sP: Person){
    console.log(`The person's name is ${sP.name}`);
    console.log(`The person's age is ${sP.age}`);
}

showPerson({ name: "Hanafi", age: 22 });
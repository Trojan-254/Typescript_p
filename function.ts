// Function declaration
function greet(name: string){
    console.log(`Hello ${name}`);
}

greet("Hanafi");

function reverseString(str: string){
    return str.split('').reverse().join('')
};
console.log(reverseString("Hello world"));
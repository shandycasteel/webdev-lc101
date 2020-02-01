const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let tempSlice = str.slice(0, 3);

let newStr = str.slice(3) + tempSlice;

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`We can turn "${str}" into pseudo-pig latin, giving us: ${newStr}`);

console.log();

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numberOfCharacters = Number(input.question("How many letters would you like to relocate? "));

console.log();

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numberOfCharacters > str.length) {
  newStr = str.slice(3) + tempSlice;
  console.log(`Since you asked for ${numberOfCharacters} characters to be moved and "${str}" is only ${str.length} characters long, we defaulted to relocating only the first three characters, giving us: "${newStr}"`)
} else {
    tempSlice = str.slice(0, numberOfCharacters);
    let newStr = str.slice(numberOfCharacters) + tempSlice;
    console.log(`As you asked, we have relocated ${numberOfCharacters} characters in "${str}", giving us: ${newStr}"`);
}

// Functions to returning an explicit value will return undefined
// let reutrnVal = console.log("launchCode");
// console.log(returnVal);

// function syntax in action

// Let's start with a prgram that prints an array of names
let names = ["Lena", "James", "Julia"];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// Following this pattern, we can create a function that will print any array of names
// Function name: printNames
// Parameter(s): names
// Body: the for loop
function printNames(names) {
    for (let i =0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// There's nothing forcing this array to only contain names, or even a string
// A Better name might be: printArray
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Lena", "James", "Julia"]);
console.log("---");
printArray(["orange", "apple", "pear"]);
console.group("---");
printArray([1, 2, 3, 4, 5]);

// Use a return statement to return a value from a function we created
/* function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToN(12)); */


// Executing a return statement terminates the function
function pastThePointOfReturn() {
    return "I'm done!";
    console.log("This will not be printed");
}

console.log(pastThePointOfReturn());


// We can use this intentionally
function countToN(n) {
    let count = 1;
    while (true) {
        if (count > n) {
        return "See!";
        }
        console.log(count);
        count++;
    }
}

console.log(countToN(12));

console.log();

// Boolean functions simply reutrn boolean values
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

// We can refactor the above to skip the else part of the conditional
function isStillEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isStillEven(4));
console.log(isStillEven(7));

// We can refactor it even further
// Making the conditional results the return value

function isMoreEven(n) {
    return n % 2 === 0;
}

console.log(isMoreEven(4));
console.log(isMoreEven(7));

// Parameters and arguments
// Here name is a parameter, it acts like a variable that exists only within the function
// "Kristine" is a specific value used during the function call
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
let protoArray = protoArray3;

/* if (protoArray.includes(',')) {
  console.log("This string is seperated by commas.");
} else if (protoArray.includes(';')) {
  console.log("This string is seperated by semicolons.");
}  else if (protoArray.includes(' ')) {
    console.log("This string is sperated by spaces");
} else {
    console.log("I don't know what's ahppening here.");
}

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

if (protoArray.includes(',')) {
  tempArray = protoArray.split(',');
  tempArray = tempArray.reverse();
  console.log(tempArray.join(','));
} else if (protoArray.includes(';')) {
  console.log("This string is seperated by semicolons.");
}  else if (protoArray.includes(' ')) {
    console.log("This string is sperated by spaces");
} else {
    console.log("I don't know what's ahppening here.");
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

if (protoArray.includes(',')) {
  tempArray = protoArray.split(',').reverse();
  console.log(tempArray.join(','));
} else if (protoArray.includes(';')) {
  tempArray = protoArray.split(';').sort();
  console.log(tempArray.join(','));
}  else if (protoArray.includes(' ')) {
    console.log("This string is sperated by spaces");
} else {
    console.log("I don't know what's ahppening here.");
}

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

if (protoArray.includes(',')) {
  tempArray = protoArray.split(',').reverse();
  console.log(tempArray.join(','));
} else if (protoArray.includes(';')) {
  tempArray = protoArray.split(';').sort();
  console.log(tempArray.join(','));
}  else if (protoArray.includes(' ')) {
  tempArray = protoArray.split(' ').sort().reverse();
  console.log(tempArray.join(' '));
  } else {
    console.log("I don't know what's ahppening here.");
} */

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if (protoArray.includes(', ')) {
  tempArray = protoArray.split(', ').reverse();
  console.log(tempArray.join(','));
} else if (protoArray.includes(';')) {
  tempArray = protoArray.split(';').sort();
  console.log(tempArray.join(','));
}  else if (protoArray.includes(' ')) {
  tempArray = protoArray.split(' ').sort().reverse();
  console.log(tempArray.join(' '));
  } else if (protoArray.includes(',')) {
  tempArray = protoArray.split(',').reverse();
  console.log(tempArray.join(','));
}
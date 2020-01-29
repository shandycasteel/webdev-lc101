//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetableOptions = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessertOptions = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

let pantry = [];

pantry.push(proteinOptions, grainOptions, vegetableOptions, beverageOptions, dessertOptions);

let meal = [];

for (i = 0; i < 6; i++) {
  meal[i] = [
    pantry[0][i],
    pantry[1][i],
    pantry[2][i],
    pantry[3][i],
    pantry[4][i]
  ];
}

console.log("Here are the meal options:");

for (i = 0; i < meal.length; i++) {
  console.log(`${i+1}. ${meal[i].join(', ')}`);
}

console.log("-----");


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

let numberOfMeals = 0;

const input = require('readline-sync');

numberOfMeals = Number(input.question("Enter the number of meals (1-6) you'd like assembled: "));

while (numberOfMeals < 1 || numberOfMeals > 6) {
  numberOfMeals = Number(input.question("That's not a valid option. Please enter the number of meals you'd like assembled: "));
}

for (i = 0; i < numberOfMeals; i++) {
  console.log(meal[i]);
  if (meal[i].includes('kale')) {
    console.log("Don’t worry, you can have double chocolate tomorrow.");
  }
}


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”

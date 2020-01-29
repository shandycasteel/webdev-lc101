//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel;
let astronautsOnboardCount;
let shuttleAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');

startingFuelLevel = Number(input.question("Enter a starting fuel level: "));

while (startingFuelLevel <= 5000 || startingFuelLevel >= 30000) {
  startingFuelLevel = Number(input.question("That level is not valid, enter another starting fuel level: "));
}

console.log(`You entered ${startingFuelLevel} as the starting fuel level.`);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

astronautsOnboardCount = Number(input.question("Enter the numbner of astronauts aboard for this mission: "));

while (astronautsOnboardCount < 1 || astronautsOnboardCount > 7) {
  astronautsOnboardCount = Number(input.question("That crew size is invalid, enter another count: "));
}

if (astronautsOnboardCount === 1) {
  console.log(`There is ${astronautsOnboardCount} aboard this mission.`);
} else {
  console.log(`There are ${astronautsOnboardCount} astronauts aboard this mission`)
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (astronautsOnboardCount * 100 < startingFuelLevel) {
  startingFuelLevel = startingFuelLevel - (astronautsOnboardCount * 100);
  shuttleAltitude = shuttleAltitude + 50;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km. There are ${startingFuelLevel} fuel units left.`);

if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}

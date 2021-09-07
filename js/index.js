
// Iteration 1: Names and Input
const hacker1 = "Jimmy";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "toto";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

function LengthCompare (hacker1, hacker2){
  if (driverLength > navigatorLength)
    return (`The driver has the longest name, it has ${hacker1.length}`);
  else if (driverLength < navigatorLength)
    return (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  else
    return( `Wow, you both have equally long names, ${hacker1.length} characters!`);
}

console.log(LengthCompare(hacker1, hacker2));

// Iteration 3: Loops
// 3.1
let capitalDriver = hacker1.toUpperCase();
var space = ' ';

for (var i = 0; i < driverLength; i++){
  space += capitalDriver.charAt(i) + ' ';
}

console.log(space);

//3.2
var exercise = '';
let lowerCaseNavigator = hacker2.toLowerCase();

for (var i = navigatorLength; i >= 0; i--){
  exercise += lowerCaseNavigator.charAt(i);
}
console.log(exercise);

//3.3
function checkAlphabet(hacker1, hacker2){
  if (hacker1 < hacker2){
    return ("The driver's name goes first");
  }
  else if (hacker1 > hacker2){
    return ("Yo,navigator goes first definitely");
  }
  else
    return ("What?! You both have the same name?");
}
console.log(checkAlphabet(hacker1, hacker2));

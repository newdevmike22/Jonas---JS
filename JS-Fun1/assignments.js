// Assignment 1 - Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// Log their values to the console.
// Link it to your index.html file.

const country = "The Dominican Republic";
const continent = "North America";
let population = 11.33;
let year = 2023;

console.log(`The ${country} is located in ${continent}. As of ${year} it has a population of ${population} million.`);

// Assignment 2 - Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// Log the types of isIsland, population, country and language to the console.
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment 3 - Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
language = "Spanish";
console.log(language);

// Assignment 4 - If your country split in half, and each half would contain half the population, then how many people would live in each half?
// Increase the population of your country by 1 and log the result to the console.
// Finland has a population of 6 million. Does your country have more people than Finland?
// The average population of a country is 33 million people. Does you country have less people than the average country?
// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
let Finland = 6;
console.log(Finland < population);

let countryAverage = 33;
console.log(countryAverage > population);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

population /= 2;
console.log(`${population} million.`);

population++;
console.log(`${population} million.`);

/* Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark;
console.log(markHigherBMI > BMIJohn);

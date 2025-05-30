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

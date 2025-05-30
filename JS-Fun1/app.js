/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Spike");
console.log(56);

let firstName = "Mugsy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let mugsy_lewis = "ML";
let $age = 25;

let person = "Vince";
let PI = 3.1415;

let myFirstJob = "Bus Boy";
let myCurrentJob = "Web Developer";

console.log(`${mugsy_lewis} just turned ${$age} today.`);
console.log(`${person} finally knows that PI = ${PI}.`);
console.log(`My very first job was as a ${myFirstJob}.`);
console.log(`Now I'm a ${myCurrentJob}.`);


// 7 Primitive Data Types

// 1. Number: Floating point numbers. Used for decimals and intergers.
let age = 57;

// 2. String: Sequence of characters. Used for text.
let yourName = "Goku";

// 3. Boolean: Logical type that can only be true or false. Used  for taking decisions.
let isLegalAge = true;

// 4. Undefined: Value taken by a variable that is not yet defined ('empty value).
let children;

// 5. Null: Also means 'empty value'.

// 6. Symbol (ES2015: Value that is unique and can't be changed.

// 7. BigInt (ES2020): Larger integers than the Number type can hold.

/*
let javaScriptIsCool = true;
console.log(javaScriptIsCool);

console.log(typeof true);
console.log(typeof javaScriptIsCool);
console.log(typeof 30);
console.log(typeof "Mighty Mike");

javaScriptIsCool = "Yabba-Dabba Do!";
console.log(javaScriptIsCool);
console.log(typeof javaScriptIsCool);

let favoriteDish;
console.log(favoriteDish);
console.log(typeof favoriteDish);

favoriteDish = "Pasta";
console.log(favoriteDish);
console.log(typeof favoriteDish);

// var still works but it is outdated.
var homeTown = "St. Louis";
homeTown = "Atlantis";

// Use let when the value of the variable will change later.
let yourAge = 35;
yourAge = 52;

// Use const when the value of the variable will not/can not change.
// const must always have a value. const should always be used by default.
const birthYear = 1968;


// Basic Operators - Math
const now = 2025;
const ageMike = now - 1968;
const ageMarie = now - 1977;
console.log(ageMike, ageMarie);

console.log(ageMike * 2, ageMarie / 2, 2 ** 3);
// 2 ** 3 means to the power of 3 = 2 * 2 * 2

const firstName = "Rod";
const lastName = "Munch";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

// Basic Operators - Assignment
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x / 5 = 20
x++; // x = x + 1 = 21
x--; // x = x - 1 = 20
console.log(x);

// Basic Operators - Comparison
console.log(ageMike > ageMarie); // >, <, >=, <=
console.log(ageMarie < x);
console.log(ageMarie >= 18);

const isFullAge = ageMarie >= 18;
console.log(now - 1968 > now - 1977);
*/

// Operators Precedence
const now = 2025;
const ageMike = now - 1968;
const ageMarie = now - 1977;

console.log(now - 1968 > now - 1977);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageMike + ageMarie) / 2;
console.log(ageMike, ageMarie, averageAge);

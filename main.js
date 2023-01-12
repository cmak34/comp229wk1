import { halfOf, multiply } from "./lib.js";
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';
import { Car, Vehicle } from './vehicle.js';
import { Arrow } from "./arrow.js";
import { author } from "./author.js";
import * as assignment from "./assignment.js";
import { add } from "./def.js";
import { userFriends } from './rest.js';
import { userTopFriends } from './spread.js';
import { parentWithoutClosure, parentWithClosure } from './closure.js';

// Practice 1 
console.info("practice 1 - basic use of module");
console.log(halfOf(84));
console.log(multiply(21, 2));
console.log("\n");

// Practice 2
console.info("practice 2 - export default");
doSomething();
console.log("\n");

// Practice 3
console.info("practice 3 - export binding not values");
console.log(flag);
touch();
console.log(flag);
console.log("\n");

// Practice 4
console.info("practice 4 - basic use of classes");
let car = new Car('blue');
console.log(car.toString());
console.log(car instanceof Car);
console.log(car instanceof Vehicle);
console.log("\n");

// Practice 5
console.info("practice 5 - basic use of classes");
const arrow = new Arrow([1, 2, 3, 4, 5, 6, 7]);
console.info("separating odd and even numbers");
arrow.separateOddAndEven();
console.info("Print all odd numbers");
arrow.printOdd();
console.info("Print all even numbers");
arrow.printEven();
console.info("Squaring all numbers");
console.group(arrow.square());
console.log("\n");

// Practice 6
console.info("practice 6 - demonstrate the shared lexical this");
console.info("Look for books in the scope first");
author.printBooks();
console.info("Without 'This', look for the global scope");
author.printBooksWithoutThis();
console.log("\n");

// Practice 7
console.info("practice 7 - different between let and var");
console.info("Scope of using var for assignment");
assignment.iterateVar();
console.info("Scope of using let for assignment");
assignment.iterateLet();
console.info("assignment using let will not pollute the global scope");
console.log("\n");

// Practice 8
console.info("practice 8 - constant");
const me = 1;
try {
    me = 2; //cannot reinitialize
} catch (error) {
    console.log(error)
    console.info("const cannot be reinitialized");
}
console.log("\n");


// Practice 9
console.info("practice 9 - set default value for optional parameter");
add(1);
add(1, 2);
console.log("\n");


// Practice 10
console.info("practice 10 - pass an array as trailing arguments");
userFriends('User', 'Bob', 'Alice');
console.log("\n");

// Practice 11
console.info("practice 11 - spread");
userTopFriends(...['User', 'Bob', 'Alice']);
console.log("\n");


// Practice 12
console.info("practice 12 - closure");
console.log("without closure");
parentWithoutClosure();
console.log("with closure");
const childFN = parentWithClosure();
childFN();
console.log("\n");
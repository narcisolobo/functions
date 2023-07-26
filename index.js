// Function declarations
function add2(num) {
  return num + 2;
}

console.log(add2(5));

// Functions are "first class citizens in JavaScript"
// Functions can do what any other value can do.
// They can be values of variables,
// They can be passed in as arguments to functions

// Function expressions
// Assign an anonymous function as the value of a variable.
const add2Expression = function (num) {
  return num + 2;
};

const result = add2Expression(10);
console.log(result);

// Arrow functions
// Incorporated into JavaScript in ES6.
// Syntactic Sugar
const add2Arrow = (num) => num + 2;

const result2 = add2Arrow(3);
console.log(result2);

const add2Nums = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

const result3 = add2Nums(2, 2);
console.log(result3);

// Higher Order Functions and Callback Functions

// Higher Order Functions
// A function that accepts another function as input.
function filter(arr, cb) {
  const newArr = [];
  for (const item of arr) {
    if (cb(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

// Callback Function:
// A function that is passed INTO another function.
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
const isMultOf3 = (num) => num % 3 === 0;

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = filter(oneToTen, isEven);
console.log(evens);

const odds = filter(oneToTen, isOdd);
console.log(odds);

const threeMults = filter(oneToTen, isMultOf3);
console.log(threeMults);

// forEach, map, filter
oneToTen.forEach((item) => {
  console.log(item);
});

const listItems = oneToTen.map((item) => {
  return `<li>Item #${item}</li>`;
});

listItems.forEach((listItem) => console.log(listItem));

const muppets = [
  {
    id: 1,
    name: 'Kermit',
  },
  {
    id: 2,
    name: 'Fozzy',
  },
  {
    id: 3,
    name: 'Miss Piggy',
  },
  {
    id: 4,
    name: 'Gonzo',
  },
  {
    id: 5,
    name: 'Rowlf',
  },
];

const piggy = muppets.filter((muppet) => muppet.id === 3);
console.log(piggy);
console.log(muppets);

// Asynchronous functions

// setTimeOut
let greeting;

setTimeout(() => {
  greeting = 'hello';
}, 2000);

console.log(greeting);

// fetch
// async/await syntax
// Promises

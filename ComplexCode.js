/* 
Filename: ComplexCode.js
Content: Complex and Elaborate Javascript Code
*/

// Class representing a Person
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  static sayHello() {
    console.log("Hello!");
  }
}

// Class representing a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Year: ${this.year}`);
  }
}

// Function to calculate nth Fibonacci number
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Object representing a car
const car = {
  make: 'Tesla',
  model: 'Model S',
  year: 2022,
  isElectric: true,
  startEngine() {
    console.log('Engine started.');
  },
  stopEngine() {
    console.log('Engine stopped.');
  }
};

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Iterate over numbers array and calculate their squares
const squares = numbers.map(num => num * num);

// Function to check if a number is prime
function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Print prime numbers up to a given limit
const limit = 100;
for (let i = 2; i <= limit; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Example of using Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched successfully from ${url}`);
    }, 2000);
  });
}

// Fetch data from multiple URLs in parallel
const urls = ['example.com', 'api.example.com', 'data.example.com'];
const promises = urls.map(url => fetchData(url));
Promise.all(promises)
  .then(results => {
    console.log('All data fetched:');
    results.forEach(data => console.log(data));
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
  
// Instantiate objects and call methods
const person = new Person('John Doe', 25, 175);
person.greet();

const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
book.printInfo();

Person.sayHello();

// Generate 10 random numbers between 1 and 100
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}

// Perform some complex operations
const x = 10;
let result = 0;
for (let i = 1; i <= x; i++) {
  if (i % 2 === 0) {
    result += fib(i);
  }
}

console.log(`Sum of even Fibonacci numbers up to ${x}: ${result}`);
console.log('Complex code execution completed.');
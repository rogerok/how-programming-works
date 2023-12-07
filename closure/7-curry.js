"use strict";

const curry = (fn) => (...args) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry(f);
    } else {
        return fn(...args);
    }
};

// examples

const filter = curry((predicate, array) => array.filter(predicate));

const isEven = (n) => n % 2 === 0;
const filterEven = filter(isEven);

const numbers = [1, 2, 3, 4, 5];
console.log(filterEven(numbers)); // Вывод: [2, 4]

const greet = curry((greeting, name) => `${greeting}, ${name}!`);

const greetHello = greet("Hello");
const greetHi = greet("Hi");

console.log(greetHello("John")); // Вывод: Hello, John!
console.log(greetHi("Alice"));  // Вывод: Hi, Alice!
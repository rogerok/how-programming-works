/***
 *
 * Use partial or bind
 * You can often use more general functions to define more specific functions.
 *
 * Define function power(exp, n), the same as Math.pow(n, exp) but with reverse order of arguments.
 * Implement function square(n) which returns a number to the power of two.
 * bind() function power(exp, n) to obtain function cube(n).
 */

const power = (exponent, base) => {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
};

const square = (n) => power(2, n);
console.log(square(7));

const cube = power.bind(null, 3);
console.log(cube(7));


const partial = (fn, x) => (...args) => fn(x, ...args);
const squarePartial = partial(power, 2);
console.log(squarePartial(7))


/**
 *
 * Use curry
 * Given function someFunc() which accepts n arguments (e.g. 3 arguments).
 * Implement function curry() that generates other function which accepts
 * someFunc() arguments partially and supplies them to someFunc():
 *
 */

const curry = (fn) => (...args) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry(f);
    } else {
        return fn(...args);
    }
}
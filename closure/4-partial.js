"use strict";

const partial =
    // 1
    (fn, x) =>
        // 2
        (...args) =>
            // 3
            fn(x, ...args);


const sum4 = (a, b, c, d) => a + b + c + d;

// f1 = function that accepts arguments = step 2;
const f1 = partial(sum4, 1);
// f2 = function that accepts arguments = step 2;
const f2 = partial(f1, 2);
// f3 = function that accepts arguments = step 2;
const f3 = partial(f2, 3);
// y1 = step 3
const y1 = f3(4);

console.log(y1)

// THIS DOESN'T WORK
const f21 = partial(sum4, 1, 2,)
const f22 = partial(f21, 3);
const y2 = f22(4);
console.log(y2)

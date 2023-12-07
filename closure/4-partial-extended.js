const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const sum4 = (a, b, c, d) => a + b + c + d;

const f21 = partial(sum4, 1, 2,)
const f22 = partial(f21, 3);
const y2 = f22(4);
console.log(y2)

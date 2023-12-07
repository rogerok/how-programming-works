const log = (base, n) => Math.log(n) / Math.log(base);

// Using isn't recommended
const createLog = log.bind(null, 5);
const createLn = log.bind(null, Math.E);

console.log(createLog(5), createLn(5));

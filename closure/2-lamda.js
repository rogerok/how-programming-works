"use strict";

const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = (n) => log(5, n);
const createLn = (n) => log(Math.E, n);

console.log(createLog(5), createLn(5));
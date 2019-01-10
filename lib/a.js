// if you comment out below, test passes!!
const B = require('./b');

class A {}

// if you move `const B` line into here, test also passes!!

module.exports = A;

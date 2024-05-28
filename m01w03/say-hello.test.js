const sayHello = require('./say-hello');
// const { sayHello } = require('./say-hello');
const assert = require('assert').strict;

// MANUAL TESTING
// console.assert(value to compare, message in case is falsy)
// console.assert(true === true, 'is true!');
// console.assert(true === false, 'not equal');
// console.assert(sayHello() === 'hello there!', 'not equal');

// node:assert, assert.equal(actual, expected)
assert.equal(1, 1);
// assert.equal(1, 2);
// assert.equal(1, '1');
assert.equal(sayHello(), 'hello there!');

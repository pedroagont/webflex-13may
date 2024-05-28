const sayHello = require('../say-hello');
// const { sayHello, sayGoodbye, getEmoji } = require('./say-hello');
// const assert = require('assert').strict;
// const assert = require('chai').assert;
// const expect = require('chai').expect
const { assert, expect } = require('chai');

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

// mocha
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('sayHello()', function () {
  it('should return "hello there" when calling sayHello()', () => {
    // assert.equal(sayHello(), 'hello there!');
    expect(sayHello()).to.be.a('string');
    expect(sayHello()).to.equal('hello there!');
  });
});

// tests
const assert = require('chai').assert;
const numberOfVowels = require('../vowels');

describe('numberOfVowels Function Tests', () => {
  it('returns 3 when given "orange"', () => {
    const actual = numberOfVowels('orange');
    const expected = 3;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given "lighthouse labs"', () => {
    const actual = numberOfVowels('lighthouse labs');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given "aeiou"', () => {
    const actual = numberOfVowels('aeiou');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns null when given no input', () => {
    const actual = numberOfVowels();
    const expected = null;

    assert.strictEqual(actual, expected);
  });
});

// copied from test-adder.js
const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz, buzz, or fizz-buzz if arg is divisible by 3, 5, or 15, else return arg', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 0.5, expected: 0.5},
      {a: 2, expected: 2},
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: 0, expected: 'fizz-buzz'},
      {a: -2, expected: -2},
      {a: -5, expected: 'buzz'},
      {a: -15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should throw error if arg not number', function() {
    // range of bad, non-number inputs
    const badInputs = ['one', '1', undefined, false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input)
      }).should.throw(Error);
    });
  });
});
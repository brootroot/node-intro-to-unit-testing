const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', () => {
  it('should return "fizz" if divisible by 3, "buzz" if divisible by 5, and "fizz-buz" if divisible by both.', () => {
    const goodInputs = [
      3,
      4,
      5,
      6,
      7,
      9,
      10,
      11,
      12,
      15,
      18,
      20,
      21,
      24,
      25,
      28,
      30
    ];

    goodInputs.forEach(input => {
      answer = fizzBuzzer(input);
      if (input % 15 === 0) {
        answer.should.equal('fizz-buzz');
      } else if (input % 5 === 0) {
        answer.should.equal('buzz');
      } else if (input % 3 === 0) {
        answer.should.equal('fizz');
      } else {
        answer.should.be.a('number');
      }
    });

    const badInputs = ['3', false, '92', { foo: 'bar' }];

    badInputs.forEach(input => {
      (function() {
        fizzBuzzer(input);
      }.should.throw(Error));
    });
  });
});

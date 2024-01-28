const chai = require('chai');
const expect = chai.expect;

const calculator = require('../app/calculator');

describe('Calculator tests', function() {
    describe('Addition tests', function() {
        it('add(5, 2) should return 7', function() {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it('add(5, 2) should not return 8', function() {
            expect(calculator.add(5, 2)).to.not.equal(8);
        });
    });

    describe('Subtraction tests', function() {
        it('sub(5, 2) should return 3', function() {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it('sub(5, 2) should not return 5', function() {
            expect(calculator.sub(5, 2)).to.not.equal(5);
        });
    });

    describe('Multiplication tests', function() {
        it('mul(5, 2) should return 10', function() {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it('mul(5, 2) should not return 12', function() {
            expect(calculator.mul(5, 2)).to.not.equal(12);
        });
    });

    describe('Division tests', function() {
        it('div(10, 2) should return 5', function() {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it('div(10, 2) should not return 2', function() {
            expect(calculator.div(10, 2)).to.not.equal(2);
        });
    });
});

const expect = require('chai').expect;
// const sum = require('../index');
// const opposite = require('../index');

const homeFunc = require('../index');

it('should calculate sum of positive', () => {
    expect(homeFunc.sum(10, 1)).eq(11);
});

it('should calculate sum of negatives', () => {
    expect(homeFunc.sum(-10, -1)).eq(-11);
});

it('should calculate sum of zeros', () => {
    expect(homeFunc.sum(0, 0)).eq(0);
});

it('should compare arrays', () => {
    expect([1, 2, 3]).eql([1, 2, 3]);
});

it('should return opposite value', () => {
    expect(homeFunc.opposite(15)).eql(-15);
});

it('should return greeting', () => {
    expect(homeFunc.greeting('Thomas')).eql('Hello Thomas!');
});

it('should return power of value', () => {
    expect(homeFunc.power(4, 3)).eql(64);
});

it('should return body mass index', () => {
    expect(homeFunc.bmi(60, 1.7)).eql(21);
});

it('should return product of elements of array', () => {
    expect(homeFunc.prodArr([2, 3, 3])).eql(18);
});

it('should return new arr with doubled elements', () => {
    expect(homeFunc.double([5, 5, 5])).eql([10, 10, 10]);
});

it('should return Fibonacci Sequence', () => {
    expect(homeFunc.fibonacci(8)).eql([0, 1, 1, 2, 3, 5, 8, 13]);
});

it('should return sum of even and multiple of odd', () => {
    expect(homeFunc.sumEvenMultOdd([2, 4, 6, 3, 1, 7])).eql([12, 21]);
});

it('should return unique elements of array', () => {
    expect(homeFunc.unique([2, 2, 2, 3, 3, 3, 7, 7, 8, 9])).eql([8,9]);
});

it('should return duplicates', () => {
    expect(homeFunc.duplicates([2, 2, 2, 3, 3, 3, 7, 7, 8, 9])).eql([2, 2, 2, 3, 3, 3, 7, 7]);
});

it('should return duplicates in a single copy', () => {
    expect(homeFunc.duplicatesSingle([2, 2, 2, 3, 3, 3, 7, 7, 8, 9])).eql([2, 3, 7]);
});



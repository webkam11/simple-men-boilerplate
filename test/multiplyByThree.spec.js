import { multiplyByThree } from '../src/lib/multiplyByThree';

const { expect } = require('chai');

describe('#multiplyByThree', () => {
  it('should return the correct result', () => {
    const array = [1, 2, 3];
    expect(multiplyByThree(array)).to.deep.equal([3, 6, 9]);
  });

  it('should throw an error for non-array inputs', () => {
    const string = 'hello';
    expect(() => multiplyByThree(string)).to.throw(Error);
  });

  it('should throw an error for undefined or null results', () => {
    const input = null;
    expect(() => multiplyByThree(input)).to.throw(Error);
  });

  it('should throw an error for invalid inputs', () => {
    const array = ['blah blah'];
    expect(() => multiplyByThree(array)).to.throw(Error);
  });
});

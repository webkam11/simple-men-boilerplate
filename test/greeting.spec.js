import { greeting } from '../src/lib/greeting';

const { expect } = require('chai');

describe('Greeting method', () => {
  it('should return "Hello Kam"', () => {
    expect(greeting('Kam')).to.equal('Hello Kam');
  });
});

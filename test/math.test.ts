import {random} from '../src/index';

describe('#randm', () => {
  test(`generate integer from 0 to 10`, () => {
    const number = random(0, 10);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeGreaterThanOrEqual(0);
  });
  test(`genarate integer from -20 to -10`, () => {
    const number = random(-20, -10);
    expect(number).toBeLessThanOrEqual(-10);
    expect(number).toBeGreaterThanOrEqual(-20);
  });
  test(`genarate integer from -10 to 10`, () => {
    const number = random(-10, 10);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeGreaterThanOrEqual(-10);
  });
});

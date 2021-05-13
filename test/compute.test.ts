import {add, subtract, multiply, divide} from '../src/index';

describe('#add', () => {
  test(`1 add 2`, () => {
    expect(add(1, 2)).toBe(3);
  });
  test(`1 add 0.2`, () => {
    expect(add(1, 0.2)).toBe(1.2);
  });
  test(`0.1 add 0.2`, () => {
    expect(add(0.1, 0.2)).toBe(0.3);
  });
  test(`-1 add -2`, () => {
    expect(add(-1, -2)).toBe(-3);
  });
  test(`-1 add -0.2`, () => {
    expect(add(-1, -0.2)).toBe(-1.2);
  });
  test(`-0.1 add -0.2`, () => {
    expect(add(-0.1, -0.2)).toBe(-0.3);
  });
  test(`-0.1 add 0.2`, () => {
    expect(add(-0.1, 0.2)).toBe(0.1);
  });
  test(`0.1 add -0.2`, () => {
    expect(add(0.1, -0.2)).toBe(-0.1);
  });
});

describe('#subtract', () => {
  test(`4 subtract 1`, () => {
    expect(subtract(4, 1)).toBe(3);
  });
  test(`1 subtract 4`, () => {
    expect(subtract(1, 4)).toBe(-3);
  });
  test(`0.1 subtract 0.4`, () => {
    expect(subtract(0.1, 0.4)).toBe(-0.3);
  });
  test(`0.4 subtract 0.1`, () => {
    expect(subtract(0.4, 0.1)).toBe(0.3);
  });
  test(`-4 subtract -1`, () => {
    expect(subtract(-4, -1)).toBe(-3);
  });
  test(`-1 subtract -4`, () => {
    expect(subtract(-1, -4)).toBe(3);
  });
  test(`-0.4 subtract -0.1`, () => {
    expect(subtract(-0.4, -0.1)).toBe(-0.3);
  });
  test(`-0.1 subtract -0.4`, () => {
    expect(subtract(-0.1, -0.4)).toBe(0.3);
  });
});

describe('#multiply', () => {
  test(`1 multiply 2`, () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test(`2 multiply 1`, () => {
    expect(multiply(2, 1)).toBe(2);
  });
  test(`0.1 multiply 0.2`, () => {
    expect(multiply(0.1, 0.2)).toBe(0.02);
  });
  test(`0.2 multiply 0.1`, () => {
    expect(multiply(0.2, 0.1)).toBe(0.02);
  });
  test(`-2 multiply -1`, () => {
    expect(multiply(-2, -1)).toBe(2);
  });
  test(`-1 multiply -2`, () => {
    expect(multiply(-1, -2)).toBe(2);
  });
  test(`-0.2 multiply -0.1`, () => {
    expect(multiply(-0.2, -0.1)).toBe(0.02);
  });
  test(`-0.1 multiply -0.2`, () => {
    expect(multiply(-0.1, -0.2)).toBe(0.02);
  });
  test(`-0.1 multiply 0.2`, () => {
    expect(multiply(-0.1, 0.2)).toBe(-0.02);
  });
  test(`-1 multiply 2`, () => {
    expect(multiply(-1, 2)).toBe(-2);
  });
});

describe('#divide', () => {
  test(`3 divide 1`, () => {
    expect(divide(3, 1)).toBe(3);
  });
  test(`1 divide 3`, () => {
    expect(divide(1, 3)).toBeLessThan(0.3333334);
    expect(divide(1, 3)).toBeGreaterThan(0.3333333);
  });
  test(`0.1 divide 0.3`, () => {
    expect(divide(0.1, 0.3)).toBeLessThan(0.3333334);
    expect(divide(0.1, 0.3)).toBeGreaterThan(0.3333333);
  });
  test(`0.3 divide 0.1`, () => {
    expect(divide(0.3, 0.1)).toBe(3);
  });
  test(`-1 divide -3`, () => {
    expect(divide(-1, -3)).toBeLessThan(0.3333334);
    expect(divide(-1, -3)).toBeGreaterThan(0.3333333);
  });
  test(`-3 divide -1`, () => {
    expect(divide(-3, -1)).toBe(3);
  });
  test(`-0.1 divide -0.3`, () => {
    expect(divide(-0.1, -0.3)).toBeLessThan(0.3333334);
    expect(divide(-0.1, -0.3)).toBeGreaterThan(0.3333333);
  });
  test(`-3 divide -1`, () => {
    expect(divide(-3, -1)).toBe(3);
  });
  test(`-0.3 divide 0.1`, () => {
    expect(divide(-0.3, 0.1)).toBe(-3);
  });
  test(`-3 divide 1`, () => {
    expect(divide(-3, 1)).toBe(-3);
  });
});

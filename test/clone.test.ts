import {clone} from '../src/index';

describe('#clone', () => {
  test(`clone Null`, () => {
    expect(clone(null)).toBeNull();
  });
  test(`clone Undefined`, () => {
    expect(clone(undefined)).toBeUndefined();
  });
  test(`clone Number`, () => {
    expect(clone(1)).toBe(1);
  });
  test(`clone Boolean`, () => {
    expect(clone(false)).toBeFalsy();
  });
  test(`clone String`, () => {
    expect(clone('abc')).toBe('abc');
  });
  test(`clone Date`, () => {
    const date = new Date();
    expect(clone(date)).toBe(date);
  });
  test(`clone RegExp`, () => {
    const reg = /1/;
    expect(clone(reg)).toBe(reg);
  });
  test(`clone Function`, () => {
    function fn() {
      // done
    }
    expect(clone(fn)).toBe(fn);
  });
  test(`clone Object`, () => {
    const obj = {a: 1, b: 2};
    const cloneObj = clone(obj);
    expect(Object.is(obj, cloneObj)).toBe(false);
    expect(cloneObj).toStrictEqual(obj);
    cloneObj.a = 2;
    expect(obj.a).toBe(1);
  });
  test(`clone Deep Object`, () => {
    const obj = {a: {b: 1}, b: [1, 2, 3]};
    const cloneObj = clone(obj);
    expect(Object.is(obj, cloneObj)).toBe(false);
    expect(cloneObj).toStrictEqual(obj);
    cloneObj.a.b = 2;
    cloneObj.b = 1;
    expect(obj.a.b).toBe(1);
    expect(obj.b).toStrictEqual([1, 2, 3]);
  });
  test(`clone Array`, () => {
    const obj = [1, 2, 3, 4];
    const cloneObj = clone(obj);
    expect(Object.is(obj, cloneObj)).toBe(false);
    expect(cloneObj).toStrictEqual(obj);
    cloneObj[0] = 2;
    expect(obj[0]).toBe(1);
  });
  test(`clone Deep Array`, () => {
    const obj = [1, [1], {a: 1}];
    const cloneObj = clone(obj);
    expect(Object.is(obj, cloneObj)).toBe(false);
    expect(cloneObj).toStrictEqual(obj);
    cloneObj[0] = 2;
    cloneObj[1] = [2];
    cloneObj[2].a = 2;
    expect(obj[0]).toBe(1);
    expect(obj[1]).toStrictEqual([1]);
    expect((obj[2] as {a: number}).a).toBe(1);
  });
});

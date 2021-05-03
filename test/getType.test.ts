import {Type, getType, isReferenceType} from '../src/index';

describe('#getType', () => {
  test(`get Null type`, () => {
    expect(getType(null)).toBe(Type.Null);
  });
  test(`get Undefined type`, () => {
    expect(getType(undefined)).toBe(Type.Undefined);
  });
  test(`get Number type`, () => {
    expect(getType(1)).toBe(Type.Number);
  });
  test(`get Boolean type`, () => {
    expect(getType(false)).toBe(Type.Boolean);
  });
  test(`get String type`, () => {
    expect(getType('')).toBe(Type.String);
  });
  test(`get Symbol type`, () => {
    expect(getType(Symbol('a'))).toBe(Type.Symbol);
  });
  test(`get Date type`, () => {
    expect(getType(new Date())).toBe(Type.Date);
  });
  test(`get RegExp type`, () => {
    expect(getType(/123/)).toBe(Type.RegExp);
  });
  test(`get Function type`, () => {
    expect(
      getType(function () {
        //
      })
    ).toBe(Type.Function);
  });
  test(`get Object type`, () => {
    expect(getType({a: 1, b: 2})).toBe(Type.Object);
  });
  test(`get Array type`, () => {
    expect(getType([1, 2])).toBe(Type.Array);
  });
  test(`{} is ReferenceType`, () => {
    expect(isReferenceType({})).toBeTruthy();
  });
  test(`[] is ReferenceType`, () => {
    expect(isReferenceType([])).toBeTruthy();
  });
  test(`'abc' is not ReferenceType`, () => {
    expect(isReferenceType('abc')).toBeFalsy();
  });
  test(`123 is not ReferenceType`, () => {
    expect(isReferenceType(123)).toBeFalsy();
  });
});

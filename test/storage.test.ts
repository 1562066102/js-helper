import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
} from '../src/index';

describe('#localStorage', () => {
  test('getLocalStorage with null value', () => {
    expect(getLocalStorage('test')).toBeNull();
  });
  test('getLocalStorage with some value', () => {
    setLocalStorage('test', null);
    expect(getLocalStorage('test')).toBe('');
    setLocalStorage('test', 1);
    expect(getLocalStorage('test')).toBe(1);
    setLocalStorage('test', '1');
    expect(getLocalStorage('test')).toBe('1');
    setLocalStorage('test', {a: 1});
    expect(getLocalStorage('test')).toStrictEqual({a: 1});
    setLocalStorage('test', [1, 2, 3]);
    expect(getLocalStorage('test')).toStrictEqual([1, 2, 3]);
  });
  test(`removeLocalStorage`, () => {
    removeLocalStorage('test');
    expect(getLocalStorage('test')).toBeNull();
  });
});

describe('#sessionStorage', () => {
  test('getSessionStorage with null value', () => {
    expect(getSessionStorage('test')).toBeNull();
  });
  test('getSessionStorage with some value', () => {
    setSessionStorage('test', null);
    expect(getSessionStorage('test')).toBe('');
    setSessionStorage('test', 1);
    expect(getSessionStorage('test')).toBe(1);
    setSessionStorage('test', '1');
    expect(getSessionStorage('test')).toBe('1');
    setSessionStorage('test', {a: 1});
    expect(getSessionStorage('test')).toStrictEqual({a: 1});
    setSessionStorage('test', [1, 2, 3]);
    expect(getSessionStorage('test')).toStrictEqual([1, 2, 3]);
  });
  test(`removeSessionStorage`, () => {
    removeSessionStorage('test');
    expect(getSessionStorage('test')).toBeNull();
  });
});

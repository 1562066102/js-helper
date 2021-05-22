import {firstLetterUpperCase} from '../src';

describe('#firstLetterUpperCase', () => {
  test(`firstLetterUpperCase aaa`, () => {
    expect(firstLetterUpperCase('aaa')).toBe('Aaa');
  });
  test(`firstLetterUpperCase AAA`, () => {
    expect(firstLetterUpperCase('AAA')).toBe('AAA');
  });
  test(`firstLetterUpperCase 啊啊啊`, () => {
    expect(firstLetterUpperCase('啊啊啊')).toBe('啊啊啊');
  });
});

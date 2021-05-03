import {formatDate} from '../src/index';

describe('#formatDate', () => {
  const date = '2020-04-01 12:01:01';
  test(`formatDate(${new Date(date)}) is ${date}`, () => {
    expect(formatDate(new Date(date))).toBe('2020-04-01 12:01:01');
  });
  test(`formatDate(${new Date(date)}, YYYY-MM-dd) is 2020-04-01`, () => {
    expect(formatDate(new Date(date), 'YYYY-MM-dd')).toBe('2020-04-01');
  });
  test(`formatDate(${new Date(date)}, HH:mm:ss) is 12:01:01`, () => {
    expect(formatDate(new Date(date), 'HH:mm:ss')).toBe('12:01:01');
  });
  test(`formatDate(${new Date(date)}, YYYY-M-d H:m:s) is 2020-4-1 12:1:1`, () => {
    expect(formatDate(new Date(date), 'YYYY-M-d H:m:s')).toBe('2020-4-1 12:1:1');
  });
});

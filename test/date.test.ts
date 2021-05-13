import {formatDate} from '../src/index';

describe('#formatDate', () => {
  const date = '2020-04-01 12:01:01';
  test(`formatDate(${new Date(date)})`, () => {
    expect(formatDate(new Date(date))).toBe('2020-04-01 12:01:01');
  });
  test(`formatDate(${new Date(date)}, YYYY-MM-dd)`, () => {
    expect(formatDate(new Date(date), 'YYYY-MM-dd')).toBe('2020-04-01');
  });
  test(`formatDate(${new Date(date)}, HH:mm:ss)`, () => {
    expect(formatDate(new Date(date), 'HH:mm:ss')).toBe('12:01:01');
  });
  test(`formatDate(${new Date(date)}, YYYY-M-d H:m:s)`, () => {
    expect(formatDate(new Date(date), 'YYYY-M-d H:m:s')).toBe('2020-4-1 12:1:1');
  });
  test(`formatDate()`, () => {
    const currentDate = formatDate();
    expect(currentDate).toBe(formatDate(new Date(currentDate)));
  });
});

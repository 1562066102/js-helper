import {debounce} from '../src/index';

describe('#debounce', () => {
  test('timer run once when function run once within 200ms', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = debounce(callback);
    fn();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('timer run once when function run many times within 200ms', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = debounce(callback);
    fn();
    setTimeout(() => {
      fn();
    }, 100);
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('timer run twice when function run many times at the same time', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = debounce(callback);
    fn();
    fn();
    fn();
    fn();
    fn();
    fn();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('timer run twice when function run many times within 300ms', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = debounce(callback);
    fn();
    setTimeout(() => {
      fn();
    }, 250);
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

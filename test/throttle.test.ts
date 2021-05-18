import {throttle} from '../src/index';

describe('#throttle', () => {
  test('timer run once when function run once within 200ms', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = throttle(callback);
    fn();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('timer run twice when function run many times within 200ms', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = throttle(callback);
    fn();
    fn();
    setTimeout(() => {
      fn();
    }, 100);
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(2);
  });
  test('timer run twice when function run many times within 300ms', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const fn = throttle(callback);
    fn();
    fn();
    setTimeout(() => {
      fn();
    }, 100);
    setTimeout(() => {
      fn();
    }, 200);
    setTimeout(() => {
      fn();
    }, 250);
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(3);
  });
});

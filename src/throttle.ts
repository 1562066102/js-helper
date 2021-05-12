export type Throttle = (...args: any[]) => void;
export type ThrottleCallback = (...args: any[]) => any;

export default function throttle(fn: ThrottleCallback, delay = 200): Throttle {
  let [last, timer]: [null | number, any] = [null, null];
  return function (...args) {
    const self = this;
    const now = new Date().getTime();
    if (!last || now - last >= delay) {
      // !last - 确保开始边界上的调用
      last = now;
      fn.apply(self, args);
    } else if (now - last < delay) {
      // 低于节流阀时间内 - 确保结尾边界上的调用
      clearTimeout(timer);
      timer = setTimeout(function () {
        timer = last = null;
        fn.apply(self, args);
      }, delay);
    }
  };
}

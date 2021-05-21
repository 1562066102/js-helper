/** 节流函数的返回类型 */
export type Throttle = (...args: any[]) => void;

/** 节流函数接收的回调函数类型 */
export type ThrottleCallback = (...args: any[]) => void;

/**
 * 节流函数
 * @description 事件持续执行，每xx时间内只执行一次，节省性能
 * @param fn 要执行的事件
 * @param delay 时间范围，默认为200ms
 * @returns 函数
 */
export default function throttle<T extends ThrottleCallback>(fn: T, delay = 200): Throttle {
  let [last, timer]: [null | number, NodeJS.Timeout | null] = [null, null];
  return function (...args) {
    const self = this;
    const now = new Date().getTime();
    clearTimeout(timer as NodeJS.Timeout);
    if (!last || now - last >= delay) {
      // !last - 确保开始边界上的调用
      last = now;
      fn.apply(self, args);
    } else if (now - last < delay) {
      // 低于节流阀时间内 - 确保结尾边界上的调用
      timer = setTimeout(function () {
        timer = last = null;
        fn.apply(self, args);
      }, delay);
    }
  };
}

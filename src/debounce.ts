/** 防抖函数的返回类型 */
export type Debounce = (...args: any[]) => void;

/** 防抖函数接收的回调函数类型 */
export type DebounceCallback = (...args: any[]) => void;

/**
 * 防抖函数
 * @description 事件多次执行的间隔时间如果低于一定时间内，只执行最后一次，节省性能
 * @param fn 要执行的事件
 * @param delay 最小间隔时间，默认为200ms
 * @returns 函数
 */
export default function debounce<T extends DebounceCallback>(fn: T, delay = 200): Debounce {
  let timer: any = null;
  return function (...args) {
    const self = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(self, args);
    }, delay);
  };
}

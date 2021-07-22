/** 节流函数的返回类型 */
export declare type Throttle = (...args: any[]) => void;
/** 节流函数接收的回调函数类型 */
export declare type ThrottleCallback = (...args: any[]) => void;
/**
 * 节流函数
 * @description 事件持续执行，每xx时间内只执行一次，节省性能
 * @param fn 要执行的事件
 * @param delay 时间范围，默认为200ms
 * @returns 函数
 */
export default function throttle<T extends ThrottleCallback>(fn: T, delay?: number): Throttle;

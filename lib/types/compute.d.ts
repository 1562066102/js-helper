/** 计算方法的参数数组 */
declare type Args = [number, number];
/**
 * 加法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export declare function add(...args: Args): number;
/**
 * 减法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export declare function subtract(...args: Args): number;
/**
 * 乘法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export declare function multiply(...args: Args): number;
/**
 * 除法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export declare function divide(...args: Args): number;
export {};

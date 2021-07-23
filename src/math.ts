/** 计算方法相关声明 */
namespace Compute {
  /** 计算方法名称集合 */
  export enum Type {
    Add,
    Subtract,
    Multiply,
    Divide,
  }

  /** 整数对象,包含放大后的整数值以及放大倍数 */
  export type IntegerObj = {
    times: number;
    value: number;
  };

  /** 计算方法的参数数组 */
  export type Args = [number, number];
}

/**
 * 数字转化为整数对象
 * @description 得到一个整数对象,该对象包含放大后的整数值以及对应放大倍数
 * @param num 数字
 * @returns 整数对象
 */
function numToInteger(num: number): Compute.IntegerObj {
  const integerObj = {
    times: 1,
    value: 0,
  };
  if (Number.isInteger(num)) {
    integerObj.value = num;
  } else {
    integerObj.times = Math.pow(10, `${num}`.split('.')[1].length);
    integerObj.value = parseInt(`${Math.abs(num) * integerObj.times + 0.5}`, 10);
    if (num < 0) {
      integerObj.value = -integerObj.value;
    }
  }
  return integerObj;
}

/**
 * 防失真加减乘除运算的基础函数
 * @description 包含了加减乘除的计算算法
 * @param a 数字1
 * @param b 数字2
 * @param type 计算方法
 * @returns 计算后的值
 */
function compute(a: number, b: number, type: Compute.Type): number {
  const {value: n1, times: t1} = numToInteger(a);
  const {value: n2, times: t2} = numToInteger(b);
  const maxTimes = Math.max(t1, t2);
  let res: number;
  switch (type) {
    case Compute.Type.Add:
      res = (n1 * (maxTimes / t1) + n2 * (maxTimes / t2)) / maxTimes;
      break;
    case Compute.Type.Subtract:
      res = (n1 * (maxTimes / t1) - n2 * (maxTimes / t2)) / maxTimes;
      break;
    case Compute.Type.Multiply:
      res = (n1 * n2) / (t1 * t2);
      break;
    case Compute.Type.Divide:
      res = (n1 / n2) * (t2 / t1);
      break;
  }
  return res;
}

/**
 * 加法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export const add = (...args: Compute.Args) => compute(...args, Compute.Type.Add);

/**
 * 减法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export const subtract = (...args: Compute.Args) => compute(...args, Compute.Type.Subtract);

/**
 * 乘法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export const multiply = (...args: Compute.Args) => compute(...args, Compute.Type.Multiply);

/**
 * 除法
 * @param args1 数字1
 * @param args2 数字2
 * @returns 计算后的值
 */
export const divide = (...args: Compute.Args) => compute(...args, Compute.Type.Divide);

/**
 * 生成指定范围内的随机整数
 * @param min 范围内最小整数
 * @param max 范围内最大整数
 */
export function random(min: number, max: number): number {
  const difference = max - min + 1;
  return Math.floor(Math.random() * difference + min);
}

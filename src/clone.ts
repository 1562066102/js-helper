import {isObject, isArray} from './type';

/**
 * 深拷贝
 * @description 拷贝一个对象，得到一个值一样的全新对象（注：此方法并没有拷贝对象原型链上的属性）
 * @param data 任何类型的值
 * @returns 值一样但引用地址不同的对象
 */
export const clone = function cloneSourceFn<T>(data: T): T {
  const isObjOrArr = isObject(data) || isArray(data);
  if (!isObjOrArr) return data;
  const newObj: any = isObject(data) ? {} : [];
  for (const key in data) {
    newObj[key] = cloneSourceFn(data[key]);
  }
  return newObj;
};

import {getType, isReferenceType, Type} from './get-type';

/**
 * 深拷贝方法
 * @description 拷贝一个对象，得到一个值一样的全新对象
 * @param data 任何类型的值
 * @returns 值一样但引用地址不同的对象
 */
export const clone = function cloneSourceFn<T>(data: T): T {
  if (isReferenceType(data)) {
    const type = getType(data);
    const newObj: any = type === Type.Object ? {} : [];
    for (const key in data) {
      newObj[key] = cloneSourceFn(data[key]);
    }
    return newObj;
  } else {
    return data;
  }
};

import {getType, isReferenceType, Type} from './get-type';

export function clone(data: any): any {
  /**
   * @description: 深拷贝
   * @param {any} data 任何类型值
   */
  if (isReferenceType(data)) {
    const type = getType(data);
    const newObj: any = type === Type.Object ? {} : [];
    for (const key in data) {
      newObj[key] = clone(data[key]);
    }
    return newObj;
  } else {
    return data;
  }
}

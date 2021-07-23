/** Js数据类型 */
export enum Type {
  Null = 'Null',
  Undefined = 'Undefined',
  Number = 'Number',
  Boolean = 'Boolean',
  String = 'String',
  Symbol = 'Symbol',
  Date = 'Date',
  RegExp = 'RegExp',
  Function = 'Function',
  Object = 'Object',
  Array = 'Array',
}

/**
 * 获取数据类型方法
 * @param data 数据
 * @returns 数据类型
 */
export function getType<T>(data: T): Type {
  return Object.prototype.toString.call(data).slice(8, -1) as Type;
}

/**
 * 检查类型的基础函数
 * @param data 数据源
 * @param type 类型
 * @returns 布尔值
 */
function checkType<T>(data: T, type: Type | Type[]): boolean {
  return type.includes(getType(data));
}

/** 是否是数字类型 */
export const isNumber = <T>(data: T) => checkType(data, Type.Number);

/** 是否是字符串类型 */
export const isString = <T>(data: T) => checkType(data, Type.String);

/** 是否是对象类型 */
export const isObject = <T>(data: T) => checkType(data, Type.Object);

/** 是否是数组类型 */
export const isArray = <T>(data: T) => checkType(data, Type.Array);

/** 是否是引用类型 */
export const isReference = <T>(data: T) => {
  const {Date, RegExp, Function, Object, Array} = Type;
  return checkType(data, [Date, RegExp, Function, Object, Array]);
};

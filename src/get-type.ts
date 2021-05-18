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
export function getType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1);
}

/**
 * 数据是否是引用类型
 * @param data 数据源
 * @returns 布尔值
 */
export function isReferenceType(data: any): boolean {
  const type = getType(data);
  return type === Type.Object || type === Type.Array;
}

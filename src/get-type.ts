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

export function getType(data: any): string {
  /**
   * @description: 获取数据类型
   * @param data 数据源
   */
  return Object.prototype.toString.call(data).slice(8, -1);
}

export function isReferenceType(data: any): boolean {
  /**
   * @description: 判断是否为引用类型数据
   * @param data 数据源
   */
  const type = getType(data);
  return type === Type.Object || type === Type.Array;
}

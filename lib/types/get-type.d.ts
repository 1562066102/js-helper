/** Js数据类型 */
export declare enum Type {
    Null = "Null",
    Undefined = "Undefined",
    Number = "Number",
    Boolean = "Boolean",
    String = "String",
    Symbol = "Symbol",
    Date = "Date",
    RegExp = "RegExp",
    Function = "Function",
    Object = "Object",
    Array = "Array"
}
/**
 * 获取数据类型方法
 * @param data 数据
 * @returns 数据类型
 */
export declare function getType(data: any): string;
/**
 * 数据是否是引用类型
 * @param data 数据源
 * @returns 布尔值
 */
export declare function isReferenceType(data: any): boolean;

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
export declare function getType<T>(data: T): Type;
/** 是否是数字类型 */
export declare const isNumber: <T>(data: T) => boolean;
/** 是否是字符串类型 */
export declare const isString: <T>(data: T) => boolean;
/** 是否是对象类型 */
export declare const isObject: <T>(data: T) => boolean;
/** 是否是数组类型 */
export declare const isArray: <T>(data: T) => boolean;
/** 是否是引用类型 */
export declare const isReference: <T>(data: T) => boolean;

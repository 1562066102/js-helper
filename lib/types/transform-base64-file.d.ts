/**
 * Base64转File对象
 * @param base64 Base64地址
 * @param fileName 文件名，默认为file
 */
export declare function base64ToFile(base64: string, fileName?: string): File;
/**
 * File对象转Base64
 * @param file File对象或者Blob对象
 */
export declare function fileToBase64(file: File | Blob): Promise<string>;

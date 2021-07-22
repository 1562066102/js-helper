/** loadImage方法返回值 */
export interface ImageObj {
    url: string;
    width: number;
    height: number;
    base64?: string;
    file?: File;
}
/** loadImage方法配置项 */
export interface LoadImageConfig<T> {
    noCache?: T;
    base64?: T;
    file?: T;
}
/** 图片格式，遵循MIME规则 */
export declare const imageTypes: {
    'image/png': string;
    'image/gif': string;
    'image/jpeg': string;
};
/**
 * 加载图片
 * @description 快捷获取到图片宽高以及图片转化后的Base64地址、File对象、Blob对象
 * @param url 图片地址
 * @param config 可选配置项
 */
export default function loadImage(url: string, config?: LoadImageConfig<boolean>): Promise<ImageObj>;

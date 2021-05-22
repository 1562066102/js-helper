import {base64ToFile} from './transform-base64-file';

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
export const imageTypes = {
  'image/png': '.png',
  'image/gif': '.gif',
  'image/jpeg': '.jpeg,.jpg',
};

const defaultImageType = 'image/png';

/**
 * 获取图片格式
 * @param url 图片地址
 * @returns 图片格式，默认返回image/png
 */
function getImageType(url: string): string | undefined {
  url = url.split('?')[0];
  const urlType = url.substring(url.lastIndexOf('.'));
  for (const key in imageTypes) {
    if (imageTypes[key as keyof typeof imageTypes].includes(urlType)) {
      return key;
    }
  }
  return undefined;
}

/**
 * 利用canvas生成图片Base64地址
 * @param image 图片dom
 * @param type 图片格式，默认为image/png
 * @returns Base64
 */
function imageToBase64(image: HTMLImageElement, type = defaultImageType): string {
  const {width, height} = image;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  (canvas.getContext('2d') as CanvasRenderingContext2D).drawImage(image, 0, 0, width, height);
  document.body.appendChild(canvas);
  const base64 = canvas.toDataURL(type);
  document.body.removeChild(canvas);
  return base64;
}

/**
 * 加载图片
 * @description 快捷获取到图片宽高以及图片转化后的Base64地址、File对象、Blob对象
 * @param url 图片地址
 * @param config 可选配置项
 */
export default function loadImage(url: string, config: LoadImageConfig<boolean> = {}): Promise<ImageObj> {
  return new Promise(function (resolve, reject) {
    config = Object.assign(
      {
        noCache: false,
        base64: false,
        file: false,
      },
      config
    );
    const {noCache, file} = config;
    if (file) {
      config.base64 = true;
    }
    const image = new Image();
    image.setAttribute('crossOrigin', 'Anonymous');
    image.onload = function () {
      const {width, height} = image;
      const imageObj: ImageObj = {
        url,
        width,
        height,
      };
      const {base64, file} = config;
      if (base64) {
        imageObj.base64 = imageToBase64(image, getImageType(url));
      }
      if (imageObj.base64 && file) {
        file && (imageObj.file = base64ToFile(imageObj.base64));
      }
      resolve(imageObj);
    };
    image.onerror = function () {
      reject('图片加载失败');
    };
    let src = url;
    if (noCache) {
      src += `?time=${new Date().getTime().toString()}`;
    }
    image.src = src;
  });
}

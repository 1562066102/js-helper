/**
 * Base64转File对象
 * @param base64 Base64地址
 * @param fileName 文件名，默认为file
 */
export function base64ToFile(base64: string, fileName = 'file'): File {
  const arr = base64.split(','),
    mime = (arr[0].match(/:(.*?);/) as string[])[1],
    bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {type: mime});
}

/**
 * File对象转Base64
 * @param file File对象或者Blob对象
 */
export function fileToBase64(file: File | Blob): Promise<string> {
  return new Promise(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (e) {
      resolve((e.target?.result as string) ?? '');
    };
    fileReader.onerror = function (error) {
      reject(error);
    };
  });
}

/**
 * 字符串首字母大写
 * @param str 字符串
 * @returns 转化后的字符串
 */
export function firstLetterUpperCase(str: string): string {
  return str.substring(0, 1).toLocaleUpperCase() + str.substring(1);
}

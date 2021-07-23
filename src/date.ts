/**
 * 格式化日期
 * @param date 日期，默认为当前时间
 * @param format 日期格式，默认为'YYYY-MM-dd HH:mm:ss'，不补零的格式为'YYYY-M-d H:m:s'
 * @return 格式化后的日期字符串
 */
export function formatDate(date = new Date(), format = 'YYYY-MM-dd HH:mm:ss'): string {
  // 日期最小单元对象
  const singleDate: Record<string, number> = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (const key in singleDate) {
    const [matchingStr] = new RegExp(`(${key})`).exec(format) || [];
    if (!matchingStr) continue;
    const value = singleDate[key] + '';
    const newStr = value.padStart(matchingStr.length, '0');
    format = format.replace(matchingStr, newStr);
  }
  return format;
}

interface SingleDate {
  [key: string]: number;
}

export function formatDate(date = new Date(), format = 'YYYY-MM-dd HH:mm:ss'): string {
  /**
   * @description: 格式化日期函数
   * @param {date} date 日期
   * @param {string} format 格式
   * @return {string}
   */
  // 不补0，则为单个字母 例如：YYYY-M-d H:m:s => 2020-1-1 0:0:1
  // 处理日期格式
  const singleDate: SingleDate = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (const key in singleDate) {
    const [str] = new RegExp(`(${key})`).exec(format) || [];
    if (str) {
      const value = singleDate[key as keyof typeof singleDate] + '';
      const newStr = str.length === 1 ? value : value.padStart(str.length, '0');
      format = format.replace(str, newStr);
    }
  }
  return format;
}

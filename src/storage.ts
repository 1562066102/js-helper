/** storage方法返回的数据类型 */
type StorageValue = null | string | number | {key: any} | any[];

/**
 * 转化为非空的值
 * @param value 值
 * @returns 不为null和undefined的值
 */
function convertNonEmptyValue(value: any): any {
  if (value === null || value === undefined) {
    return '';
  }
  return value;
}

/**
 * 设置localStorage
 * @param key 主键
 * @param value 值
 */
export function setLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, window.JSON.stringify(convertNonEmptyValue(value)));
}

/**
 * 获取localStorage
 * @param key 主键
 * @return 值
 */
export function getLocalStorage(key: string): StorageValue {
  const value: string | null | number = window.localStorage.getItem(key);
  if (value) {
    return window.JSON.parse(value);
  } else {
    return null;
  }
}

/**
 * 删除localStorage
 * @param key 主键
 */
export function removeLocalStorage(key: string): void {
  window.localStorage.removeItem(key);
}

/**
 * 设置sessionStorage
 * @param key 主键
 * @param value 值
 */
export function setSessionStorage(key: string, value: any): void {
  window.sessionStorage.setItem(key, window.JSON.stringify(convertNonEmptyValue(value)));
}

/**
 * 获取sessionStorage
 * @param key 主键
 * @return 值
 */
export function getSessionStorage(key: string): StorageValue {
  const value: string | null | number = window.sessionStorage.getItem(key);
  if (value) {
    return window.JSON.parse(value);
  } else {
    return null;
  }
}

/**
 * 删除sessionStorage
 * @param key 主键
 */
export function removeSessionStorage(key: string): void {
  window.localStorage.removeItem(key);
}

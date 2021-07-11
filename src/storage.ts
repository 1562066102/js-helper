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
export function getLocalStorage<T = any>(key: string): T | null {
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
export function getSessionStorage<T = any>(key: string): T | null {
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
  window.sessionStorage.removeItem(key);
}

type StorageValue = null | string | number | {key: any} | any[];

function handleValue(value: any): any {
  if (value === null || value === undefined) {
    return '';
  }
  return value;
}

export function setLocalStorage(key: string, value: any): void {
  /**
   * @description: 设置setLocalStorage
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  window.localStorage.setItem(key, window.JSON.stringify(handleValue(value)));
}

export function getLocalStorage(key: string): StorageValue {
  /**
   * @description: 获取getLocalStorage
   * @param {string} key
   * @return {StorageValue}
   */
  const value: string | null | number = window.localStorage.getItem(key);
  if (value) {
    return window.JSON.parse(value);
  } else {
    return null;
  }
}

export function removeLocalStorage(key: string): void {
  /**
   * @description: 删除setLocalStorage
   * @param {string} key
   * @return {void}
   */
  window.localStorage.removeItem(key);
}

export function setSessionStorage(key: string, value: any): void {
  /**
   * @description: 设置setSessionStorage
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  window.sessionStorage.setItem(key, window.JSON.stringify(handleValue(value)));
}

export function getSessionStorage(key: string): StorageValue {
  /**
   * @description: 获取setSessionStorage
   * @param {string} key
   * @return {StorageValue}
   */
  const value: string | null | number = window.sessionStorage.getItem(key);
  if (value) {
    return window.JSON.parse(value);
  } else {
    return null;
  }
}

export function removeSessionStorage(key: string): void {
  /**
   * @description: 删除setLocalStorage
   * @param {string} key
   * @return {void}
   */
  window.localStorage.removeItem(key);
}

/**
 * 设置localStorage
 * @param key 主键
 * @param value 值
 */
export declare function setLocalStorage(key: string, value: any): void;
/**
 * 获取localStorage
 * @param key 主键
 * @return 值
 */
export declare function getLocalStorage<T = any>(key: string): T | null;
/**
 * 删除localStorage
 * @param key 主键
 */
export declare function removeLocalStorage(key: string): void;
/**
 * 设置sessionStorage
 * @param key 主键
 * @param value 值
 */
export declare function setSessionStorage(key: string, value: any): void;
/**
 * 获取sessionStorage
 * @param key 主键
 * @return 值
 */
export declare function getSessionStorage<T = any>(key: string): T | null;
/**
 * 删除sessionStorage
 * @param key 主键
 */
export declare function removeSessionStorage(key: string): void;

import {random} from './math';

/**
 * 生成uuid
 * @param length 指定uuid长度
 */
export default function uuid(length = 18): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const uuid: typeof chars = [];
  for (let i = length; i > 0; i--) {
    uuid.push(chars[random(0, chars.length)]);
  }
  return uuid.join('');
}

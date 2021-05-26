/**
 * 生成指定范围内的随机整数
 * @param min 范围内最小整数
 * @param max 范围内最大整数
 */
export function random(min: number, max: number): number {
  const difference = max - min + 1;
  return Math.floor(Math.random() * difference + min);
}

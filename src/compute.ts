enum ComputeFunctionName {
  Add,
  Subtract,
  Multiply,
  Divide,
}
type IntegerObj = {
  times: number;
  value: number;
};

type Args = [number, number];

function getInteger(num: number): IntegerObj {
  /**
   * @description: 参数转化为整数且记录小数点位置（放大倍数）
   * @param num 数字
   */
  const integerObj = {
    times: 1,
    value: 0,
  };
  if (Number.isInteger(num)) {
    integerObj.value = num;
  } else {
    integerObj.times = Math.pow(10, `${num}`.split('.')[1].length);
    integerObj.value = parseInt(`${Math.abs(num) * integerObj.times + 0.5}`, 10);
    if (num < 0) {
      integerObj.value = -integerObj.value;
    }
  }
  return integerObj;
}
function compute(a: number, b: number, type: ComputeFunctionName): number {
  /**
   * @description: 加减乘除运算，确保不丢失精度，返回结果
   * @param a 数字1
   * @param b 数字2
   * @param type 方法名
   */
  const {value: n1, times: t1} = getInteger(a);
  const {value: n2, times: t2} = getInteger(b);
  const maxTimes = Math.max(t1, t2);
  let res: number;
  switch (type) {
    case ComputeFunctionName.Add:
      res = (n1 * (maxTimes / t1) + n2 * (maxTimes / t2)) / maxTimes;
      break;
    case ComputeFunctionName.Subtract:
      res = (n1 * (maxTimes / t1) - n2 * (maxTimes / t2)) / maxTimes;
      break;
    case ComputeFunctionName.Multiply:
      res = (n1 * n2) / (t1 * t2);
      break;
    case ComputeFunctionName.Divide:
      res = (n1 / n2) * (t2 / t1);
      break;
  }
  return res;
}

export function add(...args: Args) {
  return compute(...args, ComputeFunctionName.Add);
}

export function subtract(...args: Args) {
  return compute(...args, ComputeFunctionName.Subtract);
}

export function multiply(...args: Args) {
  return compute(...args, ComputeFunctionName.Multiply);
}

export function divide(...args: Args) {
  return compute(...args, ComputeFunctionName.Divide);
}

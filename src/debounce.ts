type Debounce = (...args: any[]) => void;
type DebounceCallback = (...args: any[]) => any;

export default function debounce(fn: DebounceCallback, delay = 200): Debounce {
  let timer: any = null;
  return function (...args) {
    const self = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(self, args);
    }, delay);
  };
}

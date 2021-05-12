import {formatDate} from './date';
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
} from './storage';
import {Type, getType, isReferenceType} from './get-type';
import {clone} from './clone';
import debounce from './debounce';
import throttle from './/throttle';

export {
  formatDate,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
  Type,
  getType,
  isReferenceType,
  clone,
  debounce,
  throttle,
};

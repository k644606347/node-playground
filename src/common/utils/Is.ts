import { AnyFunction, AnyObject } from "./types";

const toString = Object.prototype.toString;
const compareToString = (v: any, str: any) => toString.call(v) === str;

export const isNumber = (v: any): v is Number => compareToString(v, '[object Number]');
export const isString = (v: any): v is string => compareToString(v, '[object String]');
export const isBoolean = (v: any): v is Boolean => compareToString(v, '[object Boolean]');
export const isUndefined = (v: any): v is undefined => v === undefined;
export const isNull = (v: any): v is null => v === null;
export const isNaN = (v: any) => Number.isNaN(v);

export const isArray = <T = any[]>(v: any): v is T => Array.isArray(v);
export const isFunction = (v: any): v is AnyFunction => compareToString(v, '[object Function]');
export const isPlainObject = (v: any): v is AnyObject => compareToString(v, '[object Object]');
export const isPromise = <T>(v: any): v is Promise<T> => compareToString(v, '[object Promise]');
export const isError = (v: any): v is Error => compareToString(v, '[object Error]');

export const isEmptyObject = (v: any) => {
    let p;
    if (!isPlainObject(v)){
        return false;
    }
    for (p in v) {
        if (v.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}

export const isEmptyContent = (v: any) => {
    return v === undefined || v === null || v === '';
}

// TODO: 增加返回值类型：非(undefiend/null)类型
export const hasValue = (v: any) => {
    return v !== undefined && v !== null;
}

Promise.resolve('123').finally

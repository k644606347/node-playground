const toString = Object.prototype.toString;
const compareToString = (v, str) => toString.call(v) === str;
export const isNumber = (v) => compareToString(v, '[object Number]');
export const isString = (v) => compareToString(v, '[object String]');
export const isBoolean = (v) => compareToString(v, '[object Boolean]');
export const isUndefined = (v) => v === undefined;
export const isNull = (v) => v === null;
export const isNaN = (v) => Number.isNaN(v);
export const isArray = (v) => Array.isArray(v);
export const isFunction = (v) => compareToString(v, '[object Function]');
export const isPlainObject = (v) => compareToString(v, '[object Object]');
export const isPromise = (v) => compareToString(v, '[object Promise]');
export const isError = (v) => compareToString(v, '[object Error]');
export const isEmptyObject = (v) => {
    let p;
    if (!isPlainObject(v)) {
        return false;
    }
    for (p in v) {
        if (v.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};
export const isEmptyContent = (v) => {
    return v === undefined || v === null || v === '';
};
// TODO: 增加返回值类型：非(undefiend/null)类型
export const hasValue = (v) => {
    return v !== undefined && v !== null;
};
//# sourceMappingURL=Is.js.map
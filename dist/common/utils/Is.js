"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toString = Object.prototype.toString;
const compareToString = (v, str) => toString.call(v) === str;
exports.isNumber = (v) => compareToString(v, '[object Number]');
exports.isString = (v) => compareToString(v, '[object String]');
exports.isBoolean = (v) => compareToString(v, '[object Boolean]');
exports.isUndefined = (v) => v === undefined;
exports.isNull = (v) => v === null;
exports.isNaN = (v) => Number.isNaN(v);
exports.isArray = (v) => Array.isArray(v);
exports.isFunction = (v) => compareToString(v, '[object Function]');
exports.isPlainObject = (v) => compareToString(v, '[object Object]');
exports.isPromise = (v) => compareToString(v, '[object Promise]');
exports.isError = (v) => compareToString(v, '[object Error]');
exports.isEmptyObject = (v) => {
    let p;
    if (!exports.isPlainObject(v)) {
        return false;
    }
    for (p in v) {
        if (v.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};
exports.isEmptyContent = (v) => {
    return v === undefined || v === null || v === '';
};
// TODO: 增加返回值类型：非(undefiend/null)类型
exports.hasValue = (v) => {
    return v !== undefined && v !== null;
};
Promise.resolve('123').finally;
//# sourceMappingURL=Is.js.map
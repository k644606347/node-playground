var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("common/utils/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tuple = (...args) => args;
    exports.required = (p) => p;
});
define("common/utils/Is", ["require", "exports"], function (require, exports) {
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
});
define("client/index", ["require", "exports", "react-dom", "react", "common/utils/Is"], function (require, exports, react_dom_1, react_1, Is_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_dom_1 = __importDefault(react_dom_1);
    react_1 = __importDefault(react_1);
    let createDiv = function () {
        let div = document.createElement("div"), root = document.body || document.documentElement;
        root.appendChild(div);
        return div;
    };
    Is_1.isError;
    document.addEventListener("DOMContentLoaded", () => {
        let wrapper = createDiv();
        react_dom_1.default.render(react_1.default.createElement("div", null, "hello!"), wrapper);
    });
});
//# sourceMappingURL=bundle.js.map
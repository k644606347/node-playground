"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Is_1 = require("./Is");
class Tools {
    formatError(err, options = {}) {
        let { beautifyJSON } = options;
        if (Is_1.isError(err)) {
            return err + '';
        }
        else {
            return JSON.stringify(err, null, beautifyJSON ? 4 : '');
        }
    }
    notEmpty(n) {
        return n !== undefined && n !== null && n !== '';
    }
}
const tools = new Tools();
exports.tools = tools;
exports.default = Tools;
//# sourceMappingURL=Tools.js.map
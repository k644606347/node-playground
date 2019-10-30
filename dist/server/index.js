"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Is_1 = require("../common/utils/Is");
let app = express_1.default();
app.all('/', handleIndex);
function handleIndex(req, res, next) {
    let { query } = req, queryStr = JSON.stringify(query);
    res.send(`<p>hello!</p><p>your ip: ${req.ip}</p><p>query: ${queryStr}</p>`);
}
app.listen(80, '0.0.0.0', () => {
    Is_1.isError;
    console.log("App running at http://%s:%d in %s mode", app.get('ip'), app.get("port"));
    console.log("  Press CTRL-C to stop\n");
});
//# sourceMappingURL=index.js.map
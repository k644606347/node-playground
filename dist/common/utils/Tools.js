import { isError } from "./Is";
class Tools {
    formatError(err, options = {}) {
        let { beautifyJSON } = options;
        if (isError(err)) {
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
export default Tools;
export { tools };
//# sourceMappingURL=Tools.js.map
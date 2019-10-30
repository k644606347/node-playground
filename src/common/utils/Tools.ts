import { isError } from "./Is";

class Tools {
    formatError(err: any, options: { beautifyJSON?: boolean } = {}) {
        let { beautifyJSON } = options;
        
        if (isError(err)) {
            return err + '';
        } else {
            return JSON.stringify(err, null, beautifyJSON ? 4 : '');
        }
    }
    notEmpty(n: any) {
        return n !== undefined && n !== null && n !== '';
    }
}

const tools = new Tools();

export default Tools;
export {
    tools
};
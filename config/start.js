// process.env.NODE_ENV = "development";

// const fsExtra = require("fs-extra");
// const colors = require("colors/safe");
// const env = require("../env");
// const child_process = require("child_process");
// const log = console.log;
// const envInfo = env.get();

// fsExtra.removeSync(envInfo.serverBuildPath);
// log(colors.green("清理完毕, 开始构建..."));
// child_process.execSync(`tsc --build ${envInfo.serverTsConfig}`, {
//     stdio: "inherit"
// });
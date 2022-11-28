const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const commonjs = require("@rollup/plugin-commonjs");
const node = require("@rollup/plugin-node-resolve");
const copy = require("rollup-plugin-copy");
const replace = require("rollup-plugin-replace");

const isProduction = process.env.NODE_ENV === "production"; // 环境变量

// 设置生产环境插件
function setProductionEnvPlugin(){
    if(isProduction) {
        return [terser()]
    }else{
        return []
    }
}

module.exports = {
    input: "./src/electron/index.ts",
    output: {
        file: "src/cache/main.js",
        format: "cjs"
    },
    external: ["electron", "path"], // 不想打包的第三方包
    plugins: [
        typescript({
            tsconfig: "./tsconfig.electron.json"
        }),
        commonjs(),
        node.nodeResolve(),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || "development")
        }),
        copy({
            targets:[]
        }),
        ...setProductionEnvPlugin()
    ]
}

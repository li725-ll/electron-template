const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const commonjs = require("@rollup/plugin-commonjs");
const node = require("@rollup/plugin-node-resolve");

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
        terser(),
    ]
}

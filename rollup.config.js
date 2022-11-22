const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
    input: "./src/electron/index.ts",
    output: {
        file: "src/cache/main.js",
        format: "cjs"
    },
    plugins: [
        typescript({ include: "electron" }),
        terser(),
        commonjs()
    ]
}

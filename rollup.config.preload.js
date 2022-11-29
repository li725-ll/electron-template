const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const node = require("@rollup/plugin-node-resolve");

module.exports = {
  input: "./src/electron/preload/index.ts",
  output: {
    file: "./src/cache/preload/index.js",
    format: "cjs"
  },
  plugins:[
    typescript({tsconfig: "./tsconfig.electron.json"}),
    terser(),
    node.nodeResolve()
  ]
}

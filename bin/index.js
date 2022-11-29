#!/usr/bin/env node
const cp = require("child_process");
const shell = require("shelljs");
const chalk = require('chalk');

const vite_process = cp.exec("yarn run dev:vue", (error, stdout, stderr)=>{
  if(error){
    console.log(chalk.red("vite 启动异常！"));
  }
});
console.log(chalk.greenBright("vite 启动成功！"));
shell.exec("yarn run build:preload") ;
console.log(chalk.greenBright("electron 预处理文件打包成功！"));
shell.exec("yarn run build-only:electron");
console.log(chalk.greenBright("electron 主程序打包成功！"));
console.log(chalk.greenBright("electron 正在启动...."));
shell.exec("yarn run dev:electron");

try {
  console.log(chalk.greenBright("进程结束 return 0"));
  process.exit(vite_process.exitCode);
}catch (err){
  console.log(chalk.red(err));
}


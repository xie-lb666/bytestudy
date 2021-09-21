#!/usr/bin/env node

// esm
import fs, {
  readFileSync
} from "fs";
import inquirer from "inquirer";
import {
  createIndexTemplate
} from "./indexTemplate.js";
import {
  createPackageTemplate
} from './packageTemplate.js';
import {path} from 'path';
import {
  question
} from './question/index.js';
import execa from 'execa'




const answer = await inquirer
  .prompt([{
    type: "input",
    name: 'packageName',
    message: 'set package name'
  }, {
    type: "number",
    name: "port",
    message: '',
    default: () => {
      return '8080'
    }
  }, {
    type: 'checkbox',
    name: 'middlewer',
    choices: [{
      name: 'koaStatic1'
    }, {
      name: 'koaStatic2'
    }, {
      name: 'koaStatic3'
    }]
  }])

const inputConfig = {
  packageName: 'haha',
  middleware: {
    router: true,
  },
};


// 自动化思维
// 1. 创建了文件夹 （项目名）
fs.mkdirSync(getRootPath());

// // 2. 创建了 index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));

// // 3. 创建了 Package.json
fs.writeFileSync(getRootPath() + "/package.json", createPackageTemplate(inputConfig));

// // 4. 安装依赖
// // TODO package  -> yarn
execa("yarn", {
  cwd: getRootPath(),
});

function getRootPath() {
  return "./haha";
}
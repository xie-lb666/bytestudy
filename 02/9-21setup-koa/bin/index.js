#!/usr/bin/env node

/**
 * 用程序自动生成
 * 1.创建了文件夹(项目名)
 *    创建时，如果存在应该删除
 * 2.创建index.js
 * 3.创建 package.json
 * 4.安装依赖   --->yarn
 */
import fs from 'fs';
import {
    createIndexTemplate
} from './indexTemplate.js';

import {
    createPackageTemplate
} from './packageTemplate.js';
import {
    question
} from "./question/index.js";
import {
    createConfig
} from "./config.js";
import execa from "execa";
import path from 'path';
const answer = await question();

const config = createConfig(answer);



fs.mkdirSync(config.packageName);
fs.writeFileSync(getRootPath() + '/index.js', createIndexTemplate(config));
fs.writeFileSync(getRootPath() + '/package.json', createPackageTemplate(config))

execa("yarn", {
    cwd: getRootPath(),
    stdio: [0, 1, 2],
});

function getRootPath() {

    return path.resolve(process.cwd(),config.packageName);
}
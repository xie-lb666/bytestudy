import ejs from "ejs";
import fs from "fs";

// 问题驱动
// 1. 手动创建
// 模板
// 开发思想  - 小步骤的开发思想
// 动态生成代码模板
export function createPackageTemplate(config) {
    const template = fs.readFileSync("./template/package.ejs", "utf-8");

    const code = ejs.render(template,{
        packageName:config.packageName
    });
    // console.log(code);

    return code;
}
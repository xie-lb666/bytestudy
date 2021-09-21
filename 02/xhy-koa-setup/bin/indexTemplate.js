import ejs from "ejs";
import fs from "fs";
import prettier from 'prettier'
import { fileURLToPath} from "url";

// 问题驱动
// 1. 手动创建
// 模板
// 开发思想  - 小步骤的开发思想
// 动态生成代码模板
export function createIndexTemplate(config) {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync("./template/index.ejs", "utf-8");

  const code = ejs.render(template, {
    router: config.middleware.router,
  });
  //  return prettier.format(code, {
  //     parser: 'json'
  //   })
  return code;
}
// 读文件列表
// 拼代码 模板渲染的方式
const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')
module.exports = async () => {
    const list = fs.readdirSync('./src/views')
        .filter(v => v !== 'Home.vue')
        .map(v => ({
            name: v.replace(".vue", "").toLowerCase(),
            file: v,
        }))
        compile({list},'./src/router.js','./template')
        /**
         * 
         */

        function compile(meta,filePath,template){
            if(fs.existsSync(template)){
                const cont = fs.readFileSync(template).toString()
                const result = handlebars.compile
            }
        }
}
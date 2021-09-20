const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

// 加载器  文件

function load(dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url);
    files.forEach(filename => {
        filename = filename.replace('.js', '')
        const file = require(url + '/' + filename)
        cb(filename, file);
    })
}

/**
 * 生成 /api/模型名.js 方便处理模型间不共性的部分
 * @param {*} url 
 * @returns 
 */
function createFile(dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url);

    if (!fs.existsSync('./api')) {
        console.log("不存在 /api,创建api");
        fs.mkdirSync('./api');
    }
    files.forEach((filename) => {
        if (!fs.existsSync(`./api/${filename}`)) {
            cb(filename);
        }
    })
}

const loadModel = config => app => {
    mongoose.connect(config.db.url, config.db.options)
    const conn = mongoose.connection
    conn.on('error', () => {
        console.log("数据库连接失败")
    })
    app.$model = {}
    load('../model', (filename, {
        schema
    }) => {
        app.$model[filename] = mongoose.model(filename, schema)
    })
    createFile('../model', (filename) => {
        // 创建对应文件夹，添加什么内容？
        fs.writeFileSync(`./api/${filename}`, '')
    })

}


module.exports = {
    loadModel
}
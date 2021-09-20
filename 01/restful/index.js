/**
 * 实现一个根据数据模型自动生成的api的功能
 *  1.获得所有的数据模型 
 *  2.根据模型生成路由
 */


const Koa = require('koa');
const app = new Koa();
// 连接数据库相关配置
const config = require('./conf');
const {
    loadModel
} = require('./framework/loader')
// 连接数据库 以及 读取 数据模型
// 读取数据模型是否可以生成 api/模型名.js  
// 考虑到模型间不共性的部分该怎么去弄？
loadModel(config)(app)

// 自动生成路由 
// [user,order]
const bodyparser = require('koa-bodyparser')
const restful = require('./framework/router')
app.use(bodyparser())
app.use(restful)



app.listen(300, () => {
    console.log('Server at 300')
})
const Koa = require('koa');
const app = new Koa();

// 动态编程

const config = require('./conf');
const {
    loadModel
} = require('./framework/loader')
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
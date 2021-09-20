const {
    promisify
} = require('util');
let figlet = promisify(require('figlet'));
const clear = require('clear')
const chalk = require('chalk');
const log = content => console.log(chalk.green(content))
const {
    clone
} = require('./download');
const open = require('open')
const spawn = async (...args) => {
    const {
        spawn
    } = require('child_process');
    return new Promise((res, rej) => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipr(process.stderr)
        proc.on('close', () => {
            res()
        })
    })

}
module.exports = async name => {
    clear()
    const data = await figlet(', . / ! = - ( ) @ # $  % *  ^ & ')
    log(data)
    log("创建项目" + name)
    // await clone('github:su37josephxia/vue-template', name)  //存在问题
    // 安装依赖
    log('安装依赖')
    // await spawn('npm',['install',{cwd:`./${name}`}])
    log(chalk.green(`安装完成`))
    open('http://127.0.0.1:8081/')
    await spawn('npm', ['run', 'serve'])
}
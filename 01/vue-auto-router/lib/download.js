const {promisify}  = require('util');
module.exports.clone = async function(repo,desc){
    const download =  promisify(require('download-git-repo'));
    const ora  = require('ora');
    // 开始下载，
    // const process = ora('下载。。。。。。。。。。。。。');
    // process.start();
    await download();
    // process.succeed();
}
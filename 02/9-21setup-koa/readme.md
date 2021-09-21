一个自动化脚手架工具：
开发部分：
   1.初始化 ： yarn init  -y 
   2.入口文件: index.js
   3.程序自动 =》 创建项目，创建入口文件，package.json,安装依赖
     主要用到 
        fs文件系统：用于创建文件和读取文件
        path模块： 写工具之类的时 要用  绝对路径 ！！！ 
        url模块：  获得绝对路径  fileURLToPath  
        ejs插件：动态生成模板，如：项目名称，端口号等
        inquirer插件：“交互式命令行用户界面。” ，用于获取用户输入
        execa插件：用于下载依赖
        prettier插件：用于格式化，让代码好看
注册为全局可用的命令：
    package.json里面的 bin ，
    注意写完后要 npm link :进行软连接，



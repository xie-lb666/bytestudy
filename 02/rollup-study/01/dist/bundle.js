function foo() {
    console.log("foo");
}

foo();
// 分析代码信息
// webpack -》 esm -> require(自定义)()


// roo
// esm = >静态
// 1. index.js ->foo
// foo.js ->{}
// 图
// 得到代码信息           -》数据结构
// 数据结构 =》生成对应的代码

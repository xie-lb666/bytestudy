1。完成一个自动生成koa项目的工具 ： 9-21setup-koa   命令：xhy-setup-koa-cli
2.webpack相关练习
3.rollup相关练习

webpak与rollup:
原理:
    webpack: 代码拿出来,记录依赖关系,然后自己包装一层require.
             (基于require ,属于动态,分析不出来依赖关系)
    rollup:  是基于esm模块开发的,天然支持esm,(静态,可以分析出依赖关系)
             通过esm分析代码的信息.构建依赖图得出代码信息=>得出数据结构
             =>导出生成对应的代码
区别:
应用场景:
    造轮子用rollup, 资源少,打包出来小 ,精简.
    网页web用webpack,开发中有热更,devserve,方便.


问题:
  webapck为什么是动态的?rollup为什么是静态的?
  esm是什么?esm怎么分析代码信息?



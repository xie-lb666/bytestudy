/**
 * rollup 默认是esm 
 * 不加载(解析) nodejs 的lib  
 * 是基于esm做的,如果遇见不支持esm的库该咋办? 
 *    将 commonjs转为 esm
 * 
 * 
 */
// 解析json
import json from 'rollup-plugin-json';
// 压缩
import {
    terser
} from "rollup-plugin-terser";
// 解析node模块
import {
    nodeResolve
} from '@rollup/plugin-node-resolve';
// 将 CommonJS 模块转换为 ES6 的esm模块，
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: './index.js',
    // output: {
    //     file: 'dist/bundle.js',
    //     format: 'esm',// cjs 为 commonjs          
    // },
    output: [{
        file: 'dist/bundle.esm.js',
        format: 'esm', // cjs 为 commonjs 
        plugins: [terser()],
    }, {
        file: 'dist/bundle.cjs.js',
        format: 'cjs', // cjs 为 commonjs          
    }],
    plugins: [json(), nodeResolve(), commonjs()],
    external:['vue'],//不进行打包的模块
}
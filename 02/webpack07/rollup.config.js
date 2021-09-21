import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {
    terser
} from 'rollup-plugin-terser';

export default {
    input: "./index.js",
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [nodeResolve(), commonjs(), json(), terser()],
    external: ["vue"],
}
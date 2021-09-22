import {
    foo
} from './foo';
import {
    bar
} from "./bar";
import data from './data.json';
import answer from 'the-answer';


import {
    createApp
} from "vue";
console.log(createApp);


// const answer = require( 'the-answer' );
console.log('the answer is ' + answer);



console.log(data)
foo();
bar();
export function main() {
    console.log("main");
}
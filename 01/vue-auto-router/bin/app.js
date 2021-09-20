#!/usr/bin/env node
// console.log("进入cli")
let figlet = require('figlet');

figlet('Hello XHY!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
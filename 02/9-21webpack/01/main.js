import {
    foo
} from './foo';
import "./style.css";
import data from './data.json5'
console.log(data);
console.log("main");

const btn = document.createElement("button");
btn.innerText = "123"
btn.onclick = () => {
    console.log("123");
    import("./bar.js");
};
document.body.append(btn);


// console.log("===================")
foo();
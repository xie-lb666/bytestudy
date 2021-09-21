import {
    foo
} from './foo';
console.log("main")
import "./sty.css"
import data from './data.json5';
console.log(data);
const btn = document.createElement("button");
btn.innerText = "点我点我"
btn.onclick = () => {
    console.log("懒加载bar");
    import("./bar.js");
};
document.body.append(btn);
foo()
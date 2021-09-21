const Koa = require("koa");
const fs = require('fs');
const path = require('path');

const app = new Koa();

app.use((ctx) => {
    const url = ctx.request.url;
    console.log(url)
    if (url === '/') {
        ctx.body = fs.readFileSync('./index.html', 'utf-8')
    } else if (url.endsWith(".js")) {
        const p = path.resolve(__dirname, url.slice(1));
        ctx.type = "text/javascript";
        const source = fs.readFileSync(p, "utf-8");
        rewriteImport(source);
    } else if (url.startsWith('/@modules')) {
        // 应该去node_modules里面查找
        const mpduleName = url.replace("/@modules", "");
        //  url ==> vue
        const prefix = path.resolve(__dirname, "node_modules", mpduleName)
        const module = require(prefix + "/package.json").module;
        console.log("module", module);
        const code = fs.readFileSync(path.resolve(prefix, module), "utf-8");
        ctx.type = "text/javascript";
        ctx.body = code;


    }

})

function rewriteImport(source) {
    return source.replace(/(from\s+['"])(?![\.\/])/g,"$1/modulec/")
    .replace(/process\.env\.NODE_ENV/g,'*development');
}


app.listen(8081, () => {
    console.log("open server localhost:8081");
});
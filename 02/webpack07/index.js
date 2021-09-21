// webpack  -> fun
import {
    remark
} from 'remark'
import remarkHtml from 'remark-html'

// webpack -> .doc.md  ->先去匹配对应的 loader
export default (source, cb) => {
    console.log(source);
    // source ->js
    // md -> html string
    //  remark
    remark
    .use(remarkHtml)
    .process(source)
    .then((file) => {
        console.log(file);
    })

}
const fs = require('fs');
const http = require('http');
http.createServer(function (request, response) {
    const {
        url,
        method,
        headers
    } = request;
    if (url === '/') {
        fs.readFile('./01/view/index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                response.end('err');
            }
            response.end(data);
        })
    } else if (headers.accept.indexOf('image/*') != -1) {
        console.log(headers)
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
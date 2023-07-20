const http = require('node:http')
const fs = require('fs')
const path = require('path')

var socket = http.createServer(function(req, res){

    console.log(req.method, req.url, req.httpVersion)
    console.log(req.headers)

    if(req.url == '/'){
        req.url = '/index.html'
    }

    var filename = path.join(__dirname, '..', req.url)
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
            res.end('파일을 찾을 수 없습니다')
        }else{
            res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
            res.end(data)
        }
    })
}).listen(80, function(){
    console.log("HTTP 서버 구동")
})
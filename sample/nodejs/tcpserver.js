const net = require('node:net')
var socket = net.createServer(function(socket){
    console.log(socket.remoteAddress, '접속')
    socket.on('error', function(){
        console.log(socket.remoteAddress, '접속 종료.')
    })
    socket.on('data', function(data){
        console.log(data.toString())
        socket.write('HTTP/1.1 200 OK\n')
        socket.write('Content-Type: text\html;charset=utf-8\n')
        socket.write('\n')
        socket.end('<h1>안녕</h1>')
    })
}).listen(1234, function(){
    console.log("TCP 서버 구동")
})
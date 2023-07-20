const net = require('node:net')
const readline = require('node:readline')
const os = require('node:os')

var socket = net.createConnection(1234, '192.168.2.122')
socket.on('data', function (data) {
    console.log('from server', data.toString())
})

const rl = readline.createInterface({
    input: socket
})
rl.on('error', function(){})

rl.on('close', function(){
    console.log('서버가 종료되었습니다')
})

rl.on('line', function (data) {
    data = JSON.parse(data)
    console.log('${data.sender}: ${data.msg}')
})

//socket.write('')
process.stdin.on('data', function (data) {
    data = data.toString().trim()
    if (data.startsWith('login')) {
        var nickname = data.substring(6)
        var message = {
            action: 'login',
            nickname
        }
        socket.write(JSON.stringify(message) + os.EOL)
    } else if (data == 'logout') {
        var message = {
            action: 'logout'
        }
    } else if (data.action == 'msg') {
        
    } else {
        var message = {
            action: 'chat',
            msg: data
        }
        socket.write(JSON.stringify(message) + os.EOL)
    }
})
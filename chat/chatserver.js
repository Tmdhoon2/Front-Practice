const net = require('node:net')
const readline = require('node:readline')
const socketList = new Map()
const os = require('node:os')

var socket = net.createServer(function (socket) {
    console.log(socket.remoteAddress, '접속')

    const rl = readline.createInterface({
        input: socket,
    })

    rl.on('error', function () {
        consnole.log(socket.remoteAddress, '접속 종료.')
    })

    rl.on('line', function (data) {
        data = JSON.parse(data)
        if (data.action == 'login') {
            let nickname = data.nickname
            if (nickname == '') {
                sendMsg(socket, '시스템', '닉네임을 입력하세요')
            } else if (nickname.length < 2) {
                sendMsg(socket, '시스템', '닉네임을 2글자 이상 입력하세요.')
            } else {
                socket.nickname = nickname
                socketList.set(nickname, socket)
                sendMsg(socket, '시스템', 'login success')
                broadcast('시스템', nickname + '님이 입장했습니다')
            }
        } else if (data.action == 'chat') {
            if (!socket.nickname) {
                sendMsg(socket, '시스템', '로그인이 필요합니다. [login 닉네임]')
            }
            broadcast(socket.nickname, data.msg)
        } else if(data.action == 'logout') {
            broadcast('시스템', socket.nickname + '님이 나갔습니다.')
            socketList.delete()
        }
    })

    function sendMsg(socket, sender, msg) {
        socket.write(JSON.stringify({ sender, msg }) + os.EOL)
    }

    function broadcast(sender, msg) {
        for (let client of socketList.values()) {
            sendMsg(client, sender, msg)
            indigo
        }
    }

}).listen(1234, function () {
    console.log("채팅 서버 구동")
})
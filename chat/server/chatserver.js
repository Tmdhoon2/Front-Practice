const net = require('node:net');
const readline = require('node:readline');
const os = require('node:os');

const socketList = new Map();

net.createServer(function(socket){
  console.log(socket.remoteAddress, '접속.');

  const rl = readline.createInterface({
    input: socket
  });

  rl.on('error', function(){
    console.log(socket.remoteAddress, '접속 종료.');
  });

  rl.on('line', function(data){
    console.log(data);
    // socket.write(data);
    data = JSON.parse(data);
    if(data.action == 'login'){
      let nickname = data.nickname;
      if(!nickname || nickname == ''){
        sendMsg(socket, '시스템', '닉네임을 입력하세요.');
      }else if(nickname.length < 2){
        sendMsg(socket, '시스템', '닉네임을 2글자 이상 입력하세요.');
      }else if(socketList.has(nickname)){
        sendMsg(socket, '시스템', nickname + '는(은) 이미 사용중입니다.');
      }else{
        socket.nickname = nickname;
        socketList.set(nickname, socket);
        sendMsg(socket, '시스템', 'login success');
        broadcast('시스템', nickname + '님이 입장했습니다.');
      }
    }else if(data.action == 'chat'){
      if(!socket.nickname){
        sendMsg(socket, '시스템', '로그인이 필요합니다. [login 닉네임]');
      }else{
        broadcast(socket.nickname, data.msg);
      }
    }else if(data.action == 'logout'){
      broadcast('시스템', socket.nickname + '님이 나갔습니다.');
      socketList.delete(socket.nickname);
    }
  });

  // 지정한 클라이언트에 메세지 전송
  function sendMsg(socket, sender, msg){
    socket.write(JSON.stringify({sender, msg}) + os.EOL);
  }

  // 접속한 모든 클라이언트에 메시지 전송
  function broadcast(sender, msg){
    for(let client of socketList.values()){
      sendMsg(client, sender, msg);
    }
  }

}).listen(1234, function(){
  console.log('채팅 서버 구동.');
});
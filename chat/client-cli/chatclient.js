const net = require('node:net');
const os = require('node:os');
const readline = require('node:readline');

// var socket = net.createConnection(1234, 'localhost');
var socket = net.createConnection(1234, '192.168.2.122');

const rl = readline.createInterface({
  input: socket
});

rl.on('error', ()=>{});

rl.on('close', ()=>{
  console.log('서버와의 연결이 끊겼습니다.');
});

rl.on('line', function(data){
  data = JSON.parse(data);
  console.log(`${data.sender}: ${data.msg}`);
});
// socket.write('hello');

process.stdin.on('data', function(data){
  // socket.write(data);
  data = data.toString();
  if(data.startsWith('login ')){
    var nickname = data.substring(6).trim();
    var message = {
      action: 'login',
      nickname
    };
    sendMsg(message);
  }else if(data.trim() == 'logout'){
    var message = {
      action: 'logout'
    };
    sendMsg(message);
  }else{
    var message = {
      action: 'chat',
      msg: data
    };
    sendMsg(message);
  }
});

function sendMsg(message){
  socket.write(JSON.stringify(message) + os.EOL);
}
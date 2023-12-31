var nodeStatic = require('node-static');
var http = require('http');
var path = require('path');
var url = require('url');

var home = path.join(__dirname, '..');
var file = new nodeStatic.Server(home);
http.createServer(function (req, res) {

    // https://dsmhs.djsch.kr/boardCnts/view.do?m=0201&boardId=54793
    // https://localhost/time?name=hong&age=30
    var parseUrl = url.parse(req.url, true)
    switch(parseUrl.pathname){
        case '/time':
            responseTime()
            break
        case '/timejson':
            responseTimeJson()
            break
        default:
            file.serve(req, res)
    }

  //res.setHeader('Access-Control-Allow-Origin', '*');
	file.serve(req, res);
}).listen(80, function(){
	console.log('http://localhost');
});


// 서버의 현재 시간을 응답
function responseTime(req, res){
	getQuery(req, function(err, query){
    var now = Date();
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // 추출한 query string과 함께 현재 시간을 문자열로 응답
    res.end(query.msg + ' ' + now);
  });
}

// 서버의 현재 시간을 응답(JSON)
function responseTimeJson(req, res){
	getQuery(req, function(err, query){
    var now = Date();
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    // 추출한 query string과 함께 현재 시간을 JSON 형태의 문자열로 응답
    var result = {
      time: now,
      msg: query.msg
    };
    res.end(JSON.stringify(result));
  });
}

// 쿼리스트링 추출
// var body = require('body/form');
function getQuery(req, cb){
	if(req.method == 'GET'){
    var parseUrl = url.parse(req.url, true);
    cb(null, parseUrl.query);
	}else if(req.method == 'POST'){
		body(req, cb);
	}
}

// socket.io 서버 구동
var io = require('socket.io')(server)

io.on('connection', socket => {
    socket.on('disconnect', () => {
        io.emit('toclient', `시스템: ${socket.nickname}님이 퇴장했습니다.`)
    })
    socket.on('login', () => {
        socket.nickname = nickname
        io.emit('toclient', `시스템: ${nickname}님이 입장했습니다.`)
    })
    socket.on('chat', msg => {

        io.emit('toclient', `${socket.nickname}: ${msg}`)
    })
})
/**
* 作者:penny
* 在命令行   node UnitHttp.js      再到网页输入本地地址127.0.01:3000
*/
var io = require("socket.io").listen(3000);
console.log('Server on port 3000');
io.sockets.on('connection',function (socket) {
        //像客户端发送消息
    socket.send('Hello cocos-js ');
    //注册客户端消息
    socket.on('message',function (data) {
        console.log(data)
    });

    //注册callServerEvent事件,便于客户端调用
    socket.on()

});

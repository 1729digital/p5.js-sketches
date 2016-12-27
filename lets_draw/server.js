var express = require('express');

var app = express();
var server = app.listen(3001);

app.use(express.static('public'));

console.log('my socket server is running');

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection',newConnection);

function newConnection(socket){
  console.log(socket.id);

  socket.on('mouse',mouseMsg);

  function mouseMsg(data){
    console.log(data);
    socket.broadcast.emit('mouse',data);
  }

}

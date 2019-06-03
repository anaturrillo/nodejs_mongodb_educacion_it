var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

const userSockets = [];

io.on('connection', function (socket) {
  userSockets.push(socket);
  socket.on("message", function (name, data) {
    console.log(`We recieved a message of type ${name}: ${data}`);
    userSockets.map(e => e.send(name, {
      who: socket.id, data
    }));
  });

  userSockets.map(e => e.send("info", {who: socket.id, data: "A user connected"}));
  console.log('a user connected');
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});


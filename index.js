// index.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı');

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı ayrıldı');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server başlatıldı. http://localhost:${PORT}`);
});

// public/socket.js
const socket = io();

socket.on('connect', () => {
  console.log('Sunucuya bağlandı');
});

socket.on('disconnect', () => {
  console.log('Sunucudan ayrıldı');
});

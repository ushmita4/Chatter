const socket = io('http://localhost:3000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container")


const namec = prompt("Enter your name to join")
socket.emit('new-user-joined',namec);
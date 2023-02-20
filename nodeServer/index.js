// Node Server which will handle socket io connections 
const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', namec => {
        console.log('New user',namec)
        users[socket.id]= namec;
        socket.broadcast.emit('user-joined', namec);
    });
    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message, namec: users[socket.id]})
    });
})
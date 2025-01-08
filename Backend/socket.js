const socketIo = require('socket.io')
const userModel = require('./models/user.model')
const captainModel = require('./models/captain.model')

let io;

const initializeSocket = (server) => {
    io = socketIo(server, {
        cors:{
            origin: "*",
            methods: ['GET','POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id} `);

        socket.on('join', async (data) => {
            const { userId, userType } = data ;

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId , {socketId: socket.id})
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
            
        });
        socket.on('disconnected', () => {
        console.log(`Client disconnected: ${socket.id} `);
        })
    })

}

const sendMessageToSocketId = (socketId, message) => {
    console.log(messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }

}

module.exports = { initializeSocket, sendMessageToSocketId}
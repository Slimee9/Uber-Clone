const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {

          const { userId, userType } = data;

          console.log("Received join event with data:", data);
          console.log(`User ${userId} joined as ${userType}`)

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });


        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
    
}

const sendMessageToSocketId = (socketId, messageObject) => {

console.log(`Sending message to ${socketId}`,messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };





// const socketIo = require("socket.io");
// const userModel = require("./models/user.model");
// const captainModel = require("./models/captain.model");

// let io;

// function initializeSocket(server) {
//   io = socketIo(server, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"],
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log(`Client connected: ${socket.id}`);
//     socket.on("join", async (data) => {
      
//       const { userId, userType } = data;

//       console.log("Received join event with data:", data); // 
      
//       console.log(`User ${userId} joined as ${userType}`);

//       try {
//         const model = userType === "user" ? userModel : captainModel;
//         const user = await model.findByIdAndUpdate(userId, { socketId: socket.id });
        
//         if (!user) {
//           return socket.emit("error", { message: `${userType} not found` });
//         }
//       } catch (err) {
//         console.error("Error updating database:", err);
//         socket.emit("error", { message: "Failed to update socketId in database" });
//       }
//     });

//     socket.on("update-location-captain", async (data) => {
//       if (!data || !data.userId || !data.location) {
//         return socket.emit("error", { message: "Invalid location data" });
//       }

//       const { userId, location } = data;
//       console.log(`Updating location for captain ${userId}:`, location);

//       try {
//         await captainModel.findByIdAndUpdate(userId, { location });
//       } catch (err) {
//         console.error("Error updating location:", err);
//         socket.emit("error", { message: "Failed to update location" });
//       }
//     });

//     socket.on("disconnect", async () => {
//       console.log(`Client disconnected: ${socket.id}`);
//       try {
//         await userModel.updateOne({ socketId: socket.id }, { $unset: { socketId: "" } });
//         await captainModel.updateOne({ socketId: socket.id }, { $unset: { socketId: "" } });
//       } catch (err) {
//         console.error("Error clearing socketId on disconnect:", err);
//       }
//     });
//   });
// }

// const sendMessageToSocketId = (socketId, messageObject) => {
//   console.log(messageObject);

//   if (io) {
//     io.to(socketId).emit(messageObject.event, messageObject.data);
//   } else {
//     console.log("Socket.io not initialized.");
//   }
// };

// module.exports = { initializeSocket, sendMessageToSocketId };


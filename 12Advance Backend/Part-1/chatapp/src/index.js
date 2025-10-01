import http from "http";
import app from "./app.js";
import { Server } from "socket.io";


const PORT = process.env.PORT || 8000

const httpServer = http.createServer(app)
const io = new Server()
io.attach(httpServer)

io.on("connection", (socket) => {
    console.log(`Socket connected:${socket.id}`)
    socket.on("message", (data) => {
        io.emit("sever-broadcast-message", data) // broadcast to all connected client
    })
})

httpServer.listen(PORT, () => {
    console.log(`HTTP server is listeinig at PORT:${PORT}`);
}) 



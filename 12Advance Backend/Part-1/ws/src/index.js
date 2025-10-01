import http from "http";
import app from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 8000;

// HTTP SERVER: Mounting express server over the http server
const httpServer = http.createServer(app);

// socket server
const io = new Server();

// Teling to socket.io to bind/attach/mount itself to an existing http server
io.attach(httpServer);

// TODO: Write the express handler
app.get("/", (_, res) => {
  return res.status(200).json({
    success: true,
    message: "I am from express handler",
  });
});

// TODO: Similarly write the handler of socket.io
/*
    - socket: Each client ko socket kha jata hai
    - socket.io assign `unique id `to each `socket`
    Agar frontend pr koi bhi `socket` `connect` krne to try kr rha hai,

*/
io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);
  socket.emit("hello");
  socket.emit("hello");
  socket.emit("hello");
  socket.emit("hello kaise ho");
  setInterval(() => {
    socket.emit(`Emitting message every 2 seconds`);
  }, 2000);
});

httpServer.listen(PORT, () => {
  console.log(`HTTP server is running at PORT: ${PORT}`);
});

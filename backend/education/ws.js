const express = require('express');
const app = express();
const http = require('http');
const {Server} = require("socket.io");
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: "*",
        method:["GET","POST"]
    }
})

io.on('connection',socket=>{
    console.log("User connected: "+socket.id);
    socket.on("send_data",data=>{
        socket.broadcast.emit("get_data",data);
    })
})

server.listen(3001,()=>{
    console.log("Server is running");
})
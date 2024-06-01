const express = require("express")
const http = require("http")
const { Server } = require("socket.io");
const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("A user is connected")

    // messaged recieved and sent back to the client.
    socket.on("chat", (chat)=>{
        if(chat.lenght){
            io.emit("chat", chat)
        }
        console.log(chat)
    })

    socket.on("disconnect", ()=>{
        console.log("A user disconnected")
    })
})

server.listen(3001, () => console.log('listening to port 3001'))


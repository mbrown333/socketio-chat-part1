const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)
const port = 3001

io.on('connection', (socket: any) => {
    console.log('user connected')
})

server.listen(port, () => console.log('Listening on ', port))
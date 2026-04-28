//Import all packages
//Loads .env file contents into process.env by default.
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes/allRoutes')
require('./config/db')

//Create server using express package
const server = express()
//Enable cors in server
server.use(cors())
//parse json to js content : middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
server.use(express.json())
//use routes in server
server.use(routes)
//handling static file/ folder
server.use('/uploads',express.static('./uploads'))
//Setup a port number to run server in internet
const PORT = process.env.PORT
//Start server to listen clent request to that port / Available server in internet
server.listen(PORT,()=>{
    console.log("Server Started & Waiting for the client request!!!");    
})
//handling global errors in server using application specific middleware
server.use((err,req,res,next)=>{
    res.status(500).json(err.message);
})
//Resolve API (get request to http://localhost:3000/) using express 
server.get('/',(req,res)=>{
    res.status(200).send(`<h1>Server Started & Waiting for the client request!!!</h1>`)
})


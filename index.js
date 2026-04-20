//Import all packages
//Loads .env file contents into process.env by default.
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes/allRoutes')

//Create server using express package
const server = express()
//Enable cors in server
server.use(cors())
//parse json to js content
server.use(express.json())
//use routes in server
server.use(routes)
//Setup a port number to run server in internet
const PORT = process.env.PORT
//Start server to listen clent request to that port / Available server in internet
server.listen(PORT,()=>{
    console.log("Server Started & Waiting for the client request!!!");    
})
//Resolve API (get request to http://localhost:3000/) using express 
server.get('/',(req,res)=>{
    res.status(200).send(`<h1>Server Started & Waiting for the client request!!!</h1>`)
})


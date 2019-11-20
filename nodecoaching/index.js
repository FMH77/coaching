// 1. require and make all the packages / libraires
// to be used in this project part of it

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

console.log(__dirname);

// 2. create a handler to store all the express functions

// specify where the engine is to pick views
// compile them to HTML and then render them
// or serve them to the client application
let server = express();
let joinedpath = path.join(__dirname,"views");

server.set("view engine", "pug");
server.use(bodyParser.json());// middleware that changes files into json objects
server.use(bodyParser.urlencoded({extended:true})) //helps connect to the browser

//specify where the engine is to pick views
server.set("views", joinedpath);


// 3. configure the server to be able to listen for requests
server.get('/registration',(req,res)=>{ 
    res.render('form');
});

server.post('/register',(req,res)=>{ 
    res.send('successful registration');
    console.log(res,req.firstname);
    
    res.render('form')
});

// ROUTES
//get - get what is on the server
//post -give this to the server
//put edit what is currently on the server
//delete - remove what is on the server

//confighure the server to be able to listen for requests
server.listen(7000,()=>{
    console.log("server is listening on 7000");
});

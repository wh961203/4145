const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

server.listen(1996);

console.log('listening on port 1996');





/*
const express430 = require('express');
const app430 = express430();
app430.use(express430.json());
//npm i mysql to install mysql
const mysql430 = require('mysql');
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support 
authentication protocol requested by server; consider upgrading MySQL client
//to solve this problem 
//run ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
const database430 = mysql430.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ASg19961203.',
    port : '3306',
    database : 'a1'
});

database430.connect((err430) => { if (err430) {
    throw err430; }
    console.log('connected to database'); });
*/
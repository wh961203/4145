const express430 = require('express');
const app430 = express430();
app430.use(express430.json());
//npm i mysql to install mysql
const mysql430 = require('mysql');

const database430 = mysql430.createConnection({
    host : 'db.cs.dal.ca',
    user : 'haow',
    password : 'B00692430',
    port : '3306',
    database : 'haow'
});

database430.connect((err) => { 
    if (err) {
    throw err;
    }
    console.log('connected to database'); 
});

app430.get('/', (req, res) => {
    res.send('This is Assignment 1 part c'); 
});

app430.get('/jobs430',(req,res) => {
    let query430 = database430.query('SELECT * FROM jobs430', (err, results) => {
        if (err) { 
            throw err;
        }
        res.send(results); 
    });
});

app430.get('/jobs430/:jobName,:partId',(req,res) => {
    let cjob430 = [req.params.jobName,req.params.partId];
    let query430 = database430.query('SELECT * FROM jobs430 WHERE jobName = ? and partId = ?',cjob430,(err,results)=>{
        if(results.length===0){
             res.status(404).send('Can not find the job with name: '+ cjob430[0] + ' and ID: '+cjob430[1]+', please confirm your jobname or partid.');
        }
        else{
             res.send(results);
        }
        if(err){
            throw err;
        }
    });   
});

app430.post('/jobs430', (req, res) => {
    console.log('to check whether the job is exists or not');
    let cjob430 = [req.body.jobName,req.body.partId];
    let query430 = database430.query('SELECT * FROM jobs430 WHERE jobName = ? and partId = ?',cjob430,(err,result)=>{
        if(result.length === 0){
            res.write('The job: '+req.body.jobName+' and ID: '+req.body.partId+' not exist\n');
            let njob430 = [req.body.jobName,req.body.partId,req.body.qty];
            let query430 = database430.query('INSERT INTO jobs430 VALUE (?,?,?)',njob430,(err, result)=>{
                res.write('The new job with name:'+njob430[0]+', ID: '+njob430[1]+' and qty: '+njob430[2]+' has inserted into the database');
                res.end();
            });
        }
        else if(err){
            throw err;
        }
        else{
             res.status(404).send('The job with name: '+cjob430[0]+' and ID: '+cjob430[1]+' already exists');
        }
    });
});

app430.put('/jobs430', (req, res) => {
    let cjob430 = [req.body.jobName,req.body.partId];
    let query430 = database430.query('SELECT * FROM jobs430 WHERE jobName = ? and partId = ?',cjob430,(err,result)=>{
        if(result.length === 0){
            res.write('The job: '+req.body.jobName+' and ID: '+req.body.partId+' not exist\n');
            res.write('Please use post function to create the job');
            res.end();
        }
        else{
            let upjob430 = [req.body.qty,req.body.jobName,req.body.partId,];
            let query430 = database430.query('UPDATE jobs430 SET qty = ? WHERE jobName = ? and partId = ?',upjob430,(err,results)=>{
                if(err){
                    throw err;
                }
                res.send('The job with name: '+req.body.jobName+' and ID: '+req.body.partId+' has updated into database');
            });
        }
    });
});


app430.listen(2430,()=> console.log(`Listening on HaoWang 2430`));

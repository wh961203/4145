const express430 = require('express');
const app430 = express430();
app430.use(express430.json());
//npm i mysql to install mysql
const mysql430 = require('mysql');

const database430 = mysql430.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ASg19961203.',
    port : '3306',
    database : 'xxx'
});

database430.connect((err) => { 
    if (err) {
    throw err;
    }
    console.log('connected to database'); 
});
app430.get('/tablesss',(req,res) => {
    const l = 'SELECT * FROM tablesss';
    let query430 = database430.query(l, (err, results) => {
        if (err) { 
            throw err;
        }
        res.send(results); 
    });
});

app430.get('/tablesss/:table1,:table2',(req,res)=>{
    let a = [req.params.table1,req.params.table2];
    let l = 'SELECT * FROM tablesss WHERE table1 = ? and table2 = ?';
    let query430 = database430.query(l,a, (err, results) => {
        if(results.length===0){
            res.status(404).send('Can not find the job with name: '+ a[0] + ' and ID: '+a[1]+', please confirm your jobname or partid.');
        }
        else{
            res.send(results);
        }
        if(err){
           throw err;
        } 
    });
});
app430.post('/tablesss',(req,res)=>{
    let a = [req.body.table1,req.body.table2];
    let l = 'SELECT * FROM tablesss WHERE table1 = ? and table2 = ?';
    let quary430 = database430.query(l,a,(err,result)=>{
        if(result.length === 0){
            res.write('The job: '+req.body.table1+' and ID: '+req.body.table2+' not exist\n');
            let njob430 = [req.body.table1,req.body.table2,req.body.table3];
            let query430 = database430.query('INSERT INTO tablesss VALUE (?,?,?)',njob430,(err, result)=>{
                res.write('The new job with name:'+njob430[0]+', ID: '+njob430[1]+' and qty: '+njob430[2]+' has inserted into the database');
                res.end();
            });
        }
        else if(err){
            throw err;
        }
        else{
             res.status(404).send('The job with name: '+a[0]+' and ID: '+a[1]+' already exists');
        }
    });
});

app430.put('/tablesss', (req, res) => {
    let cjob430 = [req.body.table1,req.body.table2];
    let query430 = database430.query('SELECT * FROM tablesss WHERE table1 = ? and table2 = ?',cjob430,(err,result)=>{
        if(result.length === 0){
            res.write('The job: '+req.body.table1+' and ID: '+req.body.table2+' not exist\n');
            res.write('Please use post function to create the job');
            res.end();
        }
        else{
            let upjob430 = [req.body.table3,req.body.table1,req.body.table2];
            let query430 = database430.query('UPDATE tablesss SET table3 = ? WHERE table1 = ? and table2 = ?',upjob430,(err,results)=>{
                if(err){
                    throw err;
                }
                res.send('The job with name: '+req.body.table1+' and ID: '+req.body.table2+' has updated into database');
            });
        }
    });
});

app430.listen(1234,()=> console.log(`Listening on HaoWang 1234`));
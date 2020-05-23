//npm i express
//auto restart with sudu npm i -g nodemon after save the code
//then use nodemon 'filename'.js
const express430 = require('express');
const app430 = express430();
app430.use(express430.json());
app430.get ('/', (req,res) => {
    res.send ('This is assignment1 part b.');
});
app430.get ('/jobs430',(req,res) => {
    res.send (jobs430);
});
app430.get ('/jobs430/:jobName,:partId',(req,res)=>{
    const job430 = jobs430.find(j=> j.jobName === req.params.jobName && j.partId === parseInt(req.params.partId));
    console.log(job430);
    if(!job430) res.status(404).send ('The job with jobname: '+req.params.jobName+' or partId: '+ req.params.partId+' can not match, please change your jobname or Id');
    res.send (job430);
});

app430.post('/jobs430', (req, res) => {
    console.log('to check whether the job is exists or not');
    const job430 = jobs430.find(j => j.jobName === req.body.jobName && j.partId === parseInt(req.body.partId));
    if (!job430) {
        console.log('The job with name: '+ req.body.jobName+' and Id: '+req.body.partId+' is not exist,we create a new job');
        const newJob430 = { jobName: req.body.jobName, partId: parseInt(req.body.partId), qty: Number(req.body.qty) }
        jobs430.push(newJob430);
        res.send('The job with name: '+ req.body.jobName+' and Id: '+req.body.partId+' is not exist,we create a new job');
        res.send(job430);
    } else {
        console.log('The job with name: '+ req.body.jobName+' and Id: '+req.body.partId+' already exist');
        res.status(404).send('The job with name: ' + req.body.jobName +
        ' and Id: ' + req.body.partId + ' already exist');
    }
  });
app430.put('/jobs430',(req,res)=>{
    const cjob430 = jobs430.find(j=>j.jobName === req.body.jobName && j.partId === parseInt(req.body.partId));
    if(!cjob430){
        res.status(404).send('The given id and jobname is not matching')
    }
    cjob430.qty = parseInt(req.body.qty);
    res.send('The given jobName and Id has matched, the new data will be update');
    res.send(cjob430);
});

let jobs430 = [
    {jobName: 'J1430', partId: 1430, qty: 5},
    {jobName: 'J2430', partId: 2430, qty: 13},
    {jobName: 'J3430', partId: 3430, qty: 21},
    {jobName: 'J4430', partId: 4430, qty: 49},
    {jobName: 'J5430', partId: 5430, qty: 0}
] 

//const port430 = process.env.PORT || 2430;
//to set the port number use export ’PORT = ...‘ or just use 2430
app430.listen(2430,()=> console.log(`Listening on HaoWang 2430`));
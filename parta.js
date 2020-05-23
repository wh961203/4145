const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('I am Hao Wang, This is 4145 Assignment 1');
        res.end();
    }

    if(req.url === '/jobs430'){
        res.write(JSON.stringify(jobs430))
        res.end();
    }
    urllist430 = ['/jobs430/1430','/jobs430/2430','/jobs430/3430','/jobs430/4430','/jobs430/5430']
    for(j=0;j<urllist430.length;j++){
        if(req.url === urllist430[j]){
            console.log(req.url);
            input430 = req.url;
            input_list430 = input430.split("/");
            partid430 = input_list430.pop();
            console.log(partid430);
            for(i=0;i<jobs430.length;i++){
                job430 = jobs430[i];
                if(job430.partId === partid430) {
                    res.write(JSON.stringify(job430));
                    res.end();
                }
            }
        }
    }
});

let jobs430 = [
    {jobName: 'J1430', partId: '1430', qty: '5'},
    {jobName: 'J2430', partId: '2430', qty: '13'},
    {jobName: 'J3430', partId: '3430', qty: '21'},
    {jobName: 'J4430', partId: '4430', qty: '49'},
    {jobName: 'J5430', partId: '5430', qty: '0'}
]

server.listen(2430);

console.log('listening on HaoWang port 2430');


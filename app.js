const express = require('express');
const app = express();
app.use(express.json());
let parts = [
{id:1,name:'part1'},
{id:2,name:'part2'},
{id:3,name:'part3'},
]
app.get('/',(req,res)=>{
res.send('Hello world from express');
});
app.get('/api/parts',(req,res)=>{
    res.send(parts);
});
app.get('/api/parts:id',(req,res)=>{
    const part = parts.find(c=>c.id === parseInt(req.params.id));
    console.log(part);
    if(!part) res.status(404).send('Part with ID '+ req.params.id+ ' was not found');
    res.send(part);
});
app.post('/api/parts', (req, res) =>{
    console.log('In app.post with id:'+ req.body.id+ ' name:'+ req.body.name);
    const part= parts.find(c=>c.id=== parseInt(req.body.id));
    if(!part) {
        console.log('part not found and to be inserted/pushed -current lenght:'+ parts.length);
        const p = { id:parseInt(req.body.id), name:req.body.name};
        parts.push(p);
        console.log('parts lenght:'+ parts.length); 
        console.log(parts);       
        res.send(parts[parts.length-1])
    }
    else{
        console.log('Part with ID '+ req.body.id+ ' exists already');
        res.status(404).send('Part with ID '+ req.body.id+ ' exists already')
    }
});
app.put('/api/parts', (req, res) =>{
    console.log('In app.update with id:'+ req.body.id+ ' name:'+ req.body.name);
    const partId= parseInt(req.body.id);
    const part= parts.find(c=>c.id=== partId); 
    console.log('Found part in Array -part.Id:'+ part.id+ ' part.name:'+ part.name);
    const partsIndex= parts.findIndex(({ id}) =>id=== partId); 
    console.log('Found part index: '+ partsIndex+ ' part.id:'+ part.id+ ' name of the part:'+ part.name);
    if(part) {part.name= req.body.name; console.log('Update parts element with index:'+ partsIndex+ ' to part with part.id'+ part.id+ 'to new name:'+ part.name);
        console.log('Updated part with id:'+ part.id); parts[partsIndex] = part;      res.send(parts[partsIndex])
    }else console.log('Part with ID '+ req.body.id+ ' does not exist');
})
const port= process.env.PORT|| 3000;
app.listen(port, () =>console.log(`Listening on port ${port}...`));
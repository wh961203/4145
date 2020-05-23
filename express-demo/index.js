//npm i express
//auto restart with sudu npm i -g nodemon after save the code
//then use nodemon 'filename'.js
const express = require('express');
const app = express();
const Joi = require('joi');
//need to install npm i joi 用来控制框架要求

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello World..');
});
app.get('/api/course',(req,res)=>{
    res.send(course);
});
app.get('/api/course/:id',(req,res)=>{
    const courses = course.find(c=>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the ID was not found');
    res.send(courses);
})
//post 需要使用postman来验证是否成功
app.post('/api/course',(req,res)=>{
        
    const {error} = validating(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
        //标明name最小3位string
    //console.log(result);
    /*post成功会显示以下信息
    {
        error: null,
        value: { name: 'the new one' },
        then: [Function: then],
        catch: [Function: catch]
      }*/
    /*失败时会返回
    {
    error: Error [ValidationError]: child "name" fails because ["name" is required]
    因为我们设置了name需要输入所以返回 name is required
        isJoi: true,
        details: [ [Object] ],
        _object: {},
        annotate: [Function]
    },
    value: {},
    then: [Function: then],
    catch: [Function: catch]
    }*/
    //失败后返回。。。


    /*不使用postman时这样可以验证
    if(!req.body.name||req.body.name.length<3){
        //400 bad request
        res.status(400).send('Name should be minimum 3 characters');
        return;
    }*/
    const courses={
        id: course.length + 1,
        name: req.body.name
    };
    course.push(courses);
    res.send(courses);
});

app.put('/api/course/:id',(req,res)=>{
    //look up the course 
    //if not existing, return 404
    const courses = course.find(c=>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the ID was not found');

    const {error} = validating(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    //validate
    //ifm returen 400, bad request
    courses.name = req.body.name;
    res.send(courses);
    //update course
    //return the updated course
});

function validating(courses){
    const schema = {
        name: Joi.string().min(3).required()
        //标明name最小3位string
    };
    return Joi.validate(courses, schema);
}
const course = [
    {id :1, name: 'c1'},
    {id :2, name: 'c2'},
    {id :3, name: 'c3'},
]
//const port430 = process.env.PORT || 2430;
//to set the port number use export ’PORT = ...‘ or just use 2430
const port = process.env.PORT  || 2431;
app.listen(port,()=> console.log(`Listening on port ${port}...`));
//app.post()
//app.put()
//app.delete()
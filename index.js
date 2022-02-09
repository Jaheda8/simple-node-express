const express =require('express');
const res = require('express/lib/response');
const cors=require('cors');

const app =express();
app.use(cors());
app.use(express.json());
const port=5000;
app.get('/',(req,res)=>{
    res.send('hello from node, i em excited')
});
const users=[
    {id:0, name:"Vabana", email:"sbana@gmail.com", identity:"old actress"},
    {id:1, name:"sabana", email:"sbana@gmail.com", identity:"old actress"},
    {id:2, name:"rabana", email:"sbana@gmail.com", identity:"old actress"},
    {id:3, name:"habana", email:"sbana@gmail.com", identity:"old actress"},
    {id:4, name:"kabana", email:"sbana@gmail.com", identity:"old actress"},
    {id:5, name:"jabana", email:"sbana@gmail.com", identity:"old actress"},
]
app.get('/users',(req,res)=>{
    //use query selector
   const search=req.query.search;
   if(search){
const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));
res.send(searchResult);
   }
   else{
    res.send(users)
   }
   
});
//app method
app.post('/users', (req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('post got hitted');
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user);
})
app.listen(port,()=>{
    console.log('lostening to port',port)
})
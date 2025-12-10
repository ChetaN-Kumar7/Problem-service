const express = require('express')
const bodyParser=require('body-parser')
const{PORT} = require('./config/server.config')
const apiRouter = require('./routes')

const app= express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

//if any request come and route start with /api, we mapp it to apiRouter
app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{
    return res.json({message:"Jais shree ram"})
})

app.listen(PORT,()=>{
    console.log("server started")
})
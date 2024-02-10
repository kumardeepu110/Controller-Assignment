const express = require('express')
const mongo = require('mongoose')
const usermodel = require('./model')
const controller = require('./controller')
const adminRoutes = require('./Routes/adminRoutes')
const app = express()

app.use(express.json())
app.use('/admin',adminRoutes)

mongo.connect('mongodb://127.0.0.1:27017/demoDB').then(r=>{
    console.log("DB connected");
}).catch(err=>{
    console.log("err"+err);
})

app.post('/', (req,res)=>{
    res.send("Welcome to the server")
})

app.listen(6000, (err)=>{
    if(err){
        console.log("err"+err);
    }
    else{
        console.log("server connected");
    }
})
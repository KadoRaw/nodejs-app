const express = require("express");

const app = express()

app.get('/', (req,res)=>{
    res.send('<h1> NODE JS AYAGTA </h1>')
})

app.listen(8000, ()=>{
    console.log('APP IS RUNNING.')
})
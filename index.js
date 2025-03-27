const express = require('express')
const app = express()
const port = 3002;

app.get('/porta', (req, res)=>{
    res.send("Ola visitante")
})

app.listen(port, ()=>{
    console.log("Servidor online")
})
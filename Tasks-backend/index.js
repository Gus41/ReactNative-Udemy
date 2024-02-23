const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send("BackEnd")
})
app.listen(300, ()=>{
    console.log("Backend sendo executado...")
})

const express = require("express")
const app = express()

app.get('/:value',(req,res)=>{
    res.status(200).send("Teste")
    console.log(req.params.value)
})





app.listen(3000, ()=>{
    console.log("Backend sendo executado...")
})

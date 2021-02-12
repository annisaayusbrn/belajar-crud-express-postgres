const express = require("express")
const app = express()
const port = 3000

app.get("/", (req,res)=>{
    return res.send("hello")
})
app.get("/login", (req,res)=>{
    return res.send("ini login")
})
app.get("/:nama", (req,res)=>{
    const nama=req.params.nama
    return res.send(`nama saya adalah ${nama}`)
})
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const URI = 'mongodb+srv://Rishabh:qwertyuiop@cluster0.8yyadat.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URI)
.then(()=>{
  app.get('/',(req,res)=>{
    res.json({Connection_Status:'Connected'})
  })
}).catch((err)=>{
  app.get('/',(req,res)=>{
    res.json({Connection_Status:'Not Conncected'})
  })
})

app.get('/ping', (req, res) => {
  res.send("Hello Rishabh");
})

app.listen(5000, ()=> {
  console.log("Server is running on port: 5000")
})


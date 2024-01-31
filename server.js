const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
const arr = require("./Data.json");
const { post, get, del,put} = require('./route');
const app = express()
const URI = 'mongodb+srv://Rishabh:qwyuiop@cluster0.8yyadat.mongodb.net/?retryWrites=true&w=majority';
app.get('/' ,(req,res) =>{
  mongoose.connect(URI)
    .then(() =>{
        res.json({Connection:'Sucessfully_Connected'})
    })
    .catch((err) =>{
        res.json({Connection:'Not_Connected'})
    })
})


app.listen(5000, ()=> {
  console.log("Server is running on port: 5000")
})

app.use(express.json());
app.get('/get', get);
app.post('/post', post);
app.delete('/:id', del);
app.put('/:id', put);

app.get('/', (req, res) => {
  res.send('Server is up and running');
});







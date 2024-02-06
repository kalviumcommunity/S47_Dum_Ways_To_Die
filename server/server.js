// const express = require('express');
// const mongoose = require('mongoose');
// const route = require('./route');
// const arr = require("./Data.json");
// const { post, get, del,put} = require('./route');
// const DataModel = require("./model/model")
// const {MongoClient} = require('mongodb')
// const cors = require("cors")
// const app = express()
// app.use(cors())
// const URI = 'mongodb+srv://Rishabh:qwertyuiop@cluster0.8yyadat.mongodb.net/?retryWrites=true&w=majority';


// app.get('/' ,(req,res) =>{
//   mongoose.connect(URI)
//     .then(() =>{
//       console.log("Connection successful")
//         res.json({Connection:'Sucessfully_Connected'})
//     })
//     .catch((err) =>{
//         res.json({Connection:'Not_Connected'})
//     })
// })



// app.use(express.json());
//   app.get('/get', get);
//   app.post('/post', post);
//   app.delete('/:id', del);
//   app.put('/:id', put);

// app.get('/', (req, res) => {
//     res.send('Server is up and running');
// });



// const client = new MongoClient(URI)
// client.connect()
// .then(()=>{
//   const database = client.db("dieee")
//   const collection = database.collection("asap")
  
//   app.get('/Database', async (req, res) => {
//     const result = await collection.find({}).toArray()
//     res.json(result)
//   }); 
  
//   app.post('/create',(req,res)=>{
//     const data = req.body
//     collection.insertOne(data)
//   })
// })
// app.listen(9001, ()=> {
//   console.log("Server is running on port: 9001")
// })
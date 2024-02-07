const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./Schema.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Rishabh:qwertyuiop@cluster0.8yyadat.mongodb.net/dieee?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');

    
    app.get('/',(req,res)=>{
      DataModel.find()
      .then(data=>res.json(data))
      .catch((err)=>res.json(err))
  })
  
  app.post('/adddata',(req,res)=>{
      DataModel.create(req.body)
      .then(data=>res.json(data))
      .catch((err)=>res.json(err))
  })
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

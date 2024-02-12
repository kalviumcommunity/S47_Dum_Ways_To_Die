const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./Schema.js');
const {ValidData} = require('./Joi_validation.js')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const URI = process.env.URI

mongoose.connect(URI)
  .then(() => {
    console.log('Connected to MongoDB');

    
    app.get('/',(req,res)=>{
      DataModel.find()
      .then(data=>res.json(data))
      .catch((err)=>res.json(err))
  })
   
  app.post('/adddata',(req,res)=>{
    const {name, died, reason, date, location} = req.body
    
    const {error} = ValidData(req.body)
    if(error) return res.json({message:error.message})



      DataModel.create(req.body)
      .then(data=>res.json(data))
      .catch((err)=>res.json(err))
  })



  app.get('/Get/:id',(req,res)=>{
    const {id} = req.params
    DataModel.findById(id)
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.put('/Update-ent/:id',(req,res)=>{
    const {id} = req.params
    const {name, died, reason, date, location} = req.body
    DataModel.findByIdAndUpdate(id,{
      name, 
      died, 
      reason,
      date, 
      location
    },{new:true})
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.delete('/Delete-Entities/:id',(req,res)=>{
    const {id} = req.params
    DataModel.findByIdAndDelete({_id:id})
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

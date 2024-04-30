const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./Schema.js');
const { ValidData } = require('./Joi_validation.js');
require('dotenv').config();
const JWT = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const URI = process.env.URI;
//I have Used Here Proess.env to get the data from env file
mongoose.connect(URI)
  .then(() => {
    console.log("Connection successful")
    //It will console log when the connection is successful
    app.get('/', (req, res) => {
      
      res.json({ Connection_Status: 'Connected' });
      //It will send the respoq in JSON in "/" endpoint when the connection is successful
    });
  })
  .catch((err) => {



    app.get('/', (req, res) => {


      res.json({ Connection_Status: 'Not Connected' });
      //It will send the respoq in JSON in "/" endpoint when the connection is unsuccessful
    });
  });


app.get('/data', (req, res) => {
  DataModel.find()
    .then(data => res.json(data))
    .catch(err => res.json({ error: err.message }));
});

app.post("/login", (req, res) => {
  const secret = "Rishabh";
  const token = JWT.sign({ data: req.body }, secret, { expiresIn: "1hr" });
  res.json({ token });
});

app.post('/adddata', (req, res) => {
  const { name, died, reason, date, location } = req.body;
  const { error } = ValidData(req.body);
  if (error) return res.status(400).json({ message: error.message });

  DataModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/Get/:id', (req, res) => {
  const { id } = req.params;
  DataModel.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(404).json({ message: 'Data not found' }));
});

app.put('/Update-ent/:id', (req, res) => {
  const { id } = req.params;
  const { name, died, reason, date, location } = req.body;
  DataModel.findByIdAndUpdate(id, {
    name,
    died,
    reason,
    date,
    location
  }, { new: true })
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/Delete-Entities/:id', (req, res) => {
  const { id } = req.params;
  DataModel.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

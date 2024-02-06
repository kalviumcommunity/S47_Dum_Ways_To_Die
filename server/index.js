const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./Data.js');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Rishabh:qwertyuiop@cluster0.8yyadat.mongodb.net/dieee?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');

    app.get('/', async (req, res) => {
      try {
        const data = await DataModel.find({});
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    app.post('/adddata', async (req, res) => {
      try {
        const newUser = await DataModel.create(req.body);
        res.json(newUser);
      } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const express = require('express');
const app = express();
const data = require('./Data.json');

app.use(express.json());


const get = app.get('/get', (req, res) => {
    res.send(data);
});

const post = app.post('/post', (req, res) => {
    const newData = req.body;
    console.log(req.body);
    data.push(newData);
    res.status(201).json(newData);
});

const del = app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
        data.splice(id, 1);
        res.json(data);
    });
    
    const put = app.put('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const update= req.body
        data[id] = update
            res.json(data);
        });


module.exports = { post, get, del,put};
require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
//const foodRouter = require('./routes/foodRoutes.js');
const http = require('http')
const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(process.env.DB, {
  useNewUrlParser: true
});

const Note = require('./Note')

app.get('/', async (req, res) => {
    //await connectToDatabase()
    const notes = await Note.find()
    res.send({ v: 1, notes })
})

app.listen(3000, () => { console.log('Server is running...') });

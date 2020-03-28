require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
//const foodRouter = require('./routes/foodRoutes.js');
const http = require('http')
const app = express();
app.use(express.json()); // Make sure it comes back as json


console.log("the value for db : ", process.env.DB)
mongoose.connect(process.env.DB, {
  useNewUrlParser: true
});

const Note = require('./Note')

app.get('/', async (req, res) => {
    //await connectToDatabase()
    const notes = await Note.find()
    res.send({ v: 1, notes })
})

http.createServer(app).listen(process.env.PORT || 8000)

const express = require('express');
const fs = require('fs');
const notes= require('./db/db.json');



const PORT = process.env.PORT || 3001;

const app = express();
const path= require('path');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api/notes';

//GET route for homepage
app.get('/', (req,res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for note taking page
app.get('/notes', (req,res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// GET route for api/notes
app.get('/api/notes', (req,res) =>
{
    res.status(200).json(notes);
});

//POST route for adding notes to notes api

// app



app.listen(PORT, () =>
console.log(`static asset on port ${PORT}`))

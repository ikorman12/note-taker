const express = require('express');
const fs = require('fs');


const PORT = process.env.PORT || 3001;

const app = express();
const path= require('path');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET route for homepage
app.get('/', (req,res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
console.log(`static asset on port ${PORT}`))

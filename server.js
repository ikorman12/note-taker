const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));r

//GET route for homepage
app.get('/', (req,res) =>
res.sendFile(path.join(__dirname,'/public/index.html'))
);

const express = require('express');
const notes= require('./db/db.json');
const { readAndAppend, readFromFile } = require('./helpers/fsUtils');


const PORT = process.env.PORT || 3001;

const app = express();
const path= require('path');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api/notes';

//GET route for homepage
app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, '/public/index.html'))

//Log our request in the terminal
console.info(`${req.method} request received`);
});


//GET route for note taking page
app.get('/notes', (req,res) => {
res.sendFile(path.join(__dirname, '/public/notes.html'))

console.info(`${req.method} request received`);
});


// GET route for all notes
app.get('/api/notes', (req,res) =>
    readFromFile('./db/db.json')
    .then((data)=>res.json(JSON.parse(data)))
);
// {
//     return res.status(200).json(notes);
// });

//POST route for adding notes to notes api
app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received to add a note`);
    const { title, text} = req.body;

  // Check if there is anything in the response body
  if (title && text) {
    const newNote = {
        title,
        text,
    };
    // convert data into string
    const noteString = JSON.stringify(newNote);

    //write string to a file
    readAndAppend( newNote, `./db/db.json`,
    (err) => 
    err
    ? console.error(err)
    : console.log(
        `Review for ${newNote.product} has been written to JSON file`
      )
    );

    const response = {
      status: 'success',
      body: newNote,
    };

  // Log the response body to the console
  console.log(response);
  res.status(201).json(response);
}else {
    res.status(500).json(`Error in posting note`);
}
  
});

// app



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}🚀`));

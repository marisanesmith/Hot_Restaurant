// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');
const customer = require('./output/customer');
const waitList = require('./output/waitlist');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// People who make reservation (DATA)

const seated = [];
// const waitlist = [];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'html/main.html')));

app.get('/res', (req, res) => res.sendFile(path.join(__dirname, 'html/res.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'html/table.html')));

// Displays all reservations
app.get('/api/seated', (req, res) => res.json(seated));

app.get('/api/waitlist', (req, res) => res.json(waitlist));


// Displays a single reservation, or returns false
app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    if (seated.length < 5) {
      seated.push(newReservation);
      return res.json(true);
    } else {
      waitlist.push(newReservation);
      return res.json(false);
    }
});
  
  // Starts the server to begin listening
  
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
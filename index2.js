
const express = require('express');
const fs = require('fs'); // Only reason to import fs to mimic DATABASE

const stars = require('./songs.json'); // ITS OUR array of stars

// Creating server
const app = express();

// Middleware
app.use(express.json()); // Just to parse the body "req.body"

const port = 9000;

//` Get all stars in our database
app.get('/', (req, res) => {
  // Javascript Code

  res.status(200).json({
    message: 'Here are the stars',
    data: stars,
  });
});

// ` Get a star by email and code


// ` Add a new star to our database
app.post('/', (req, res) => {
  const { name, email, code, person } =
    req.body;

  const newSong = {
  mysong
  };

  stars.push(newSong);

  fs.writeFile(
    './song.json',
    JSON.stringify(songs),
    (err) => {
      if (err) {
        res.status(500).json({
          message:
            'Interval Server Error',
        });
      }
    }
  );

  res.status(201).json({
    message: 'song added successfully',
    data: newSong,
  });
});

// ` Update a star in our database
app.put('/:name', (req, res) => {
  const { name } = req.params;

  const songExists = songs.find(
    (song) => song.name === name
  );

  if (!songExists) {
    return res.status(404).json({
      status: 'fail',
      message:
        'Song does not exist , Please add a new star',
    });
  }

  starExists.name = newName;

  fs.writeFile(
    './stars.json',
    JSON.stringify(song),
    (err) => {
      if (err) {
        res.status(500).json({
          message:
            'Interval Server Error',
        });
      }
    }
  );

  res.status(200).json({
    data: songExists,
    message:
      'Song updated successfully',
  });
});

// ` Delete a star in our database
app.delete('/:name', (req, res) => {
  const { name } = req.params;

  const songExists = song.find(
    (song) => song.name === name
  );

  if (!songExists) {
    return res.status(404).json({
      status: 'fail',
      message: 'Song does not exist',
    });
  }

  const index =
    song.indexOf(songExists);
  song.splice(index, 1);

  fs.writeFile(
    './song.json',
    JSON.stringify(song),
    (err) => {
      if (err) {
        res.status(500).json({
          message:
            'Interval Server Error',
        });
      }
    }
  );

  res.status(200).json({
    message:
      'Song deleted successfully',
  });
});


app.listen(port, () => {
  console.log(
    'Star are twinkling in the night sky @.\n' +
      port
  );
});

const express = require('express');
const app = express();

let trendingMovies = [
  {
    title: ' The Matrix Resurrections',
    rating: '64%'
  },
  {
    title: 'Spider-Man: No Way Home (2021)',
    rating: '94%'
  },
  {
    title: ' The Power of the Dog (2021)',
    rating: '95%'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('MovieFlix Homepage');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/books', (req, res) => {
  res.json(trendingMovies);
});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const mongoose = require('mongoose');

const Favorite = require('./models/favorite');

const app = express();

app.use(bodyParser.json());

// Get all favorites from DB
app.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

// Save a favorite character
app.post('/favorites', async (req, res) => {
  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {
    if (favType !== 'movie' && favType !== 'character') {
  throw new Error('"type" should be "movie" or "character"!');
}
    const existingFav = await Favorite.findOne({ name: favName });
    if (existingFav) {
      throw new Error('Favorite exists already!');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res
      .status(201)
      .json({ message: 'Favorite saved!', favorite: favorite.toObject() });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

// 🔄 New endpoint to fetch Rick and Morty characters
app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.status(200).json({ characters: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch characters.' });
  }
});

// app.listen(3042, () => {
//   console.log('Server running on http://localhost:3042');
// });

// Optional: Uncomment to use MongoDB if needed
mongoose.connect(
  'mongodb://mongote:27017/rmfavorites',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(3043);
    }
  }
);
// mongoose.connect('mongodb://mongodb:27017/rmfavorites', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

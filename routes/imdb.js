const express = require('express');
const passport = require('passport');

const ImdbService = require('../services/imdb');

require('../utils/auth/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/imdb', router);

  const imdbService = new ImdbService();

  router.get('/randow-page', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
      const response = await imdbService.getRandowPageMovies();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;

const express = require('express');
const passport = require('passport');

const MoviesService = require('../services/movies');
const { movieIdSchema, createMovieSchema, updateMovieSchema, pageSchema } = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

require('../utils/auth/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.post('/', passport.authenticate('jwt', { session: false }), validationHandler(createMovieSchema), async (req, res, next) => {
    const { body: movie, user } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie, user });

      res.status(201).json({ data: createdMovieId, message: 'movie created' });
    } catch (err) {
      next(err);
    }
  });

  router.get('/all-public', passport.authenticate('jwt', { session: false }), validationHandler({ page: pageSchema }, 'query'), async (req, res, next) => {
    const { page } = req.query;
    try {
      const response = await moviesService.getAllPublicMovies({ page });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });

  router.get('/my-movies', passport.authenticate('jwt', { session: false }), validationHandler({ page: pageSchema }, 'query'), async (req, res, next) => {
    const { user } = req;
    const { page } = req.query;

    try {
      const response = await moviesService.getMyMovies({ user, page });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', passport.authenticate('jwt', { session: false }), validationHandler(updateMovieSchema), async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie, user } = req;

    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie, user });

      res.status(200).json({ data: updatedMovieId, message: 'movie updated' });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieIdToDelete', passport.authenticate('jwt', { session: false }), validationHandler({ movieIdToDelete: movieIdSchema }, 'params'), async (req, res, next) => {
    const { movieIdToDelete } = req.params;
    const { user } = req;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieIdToDelete, user });

      res.status(200).json({ data: deletedMovieId, message: 'movie deleted' });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;

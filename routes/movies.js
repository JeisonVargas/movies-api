const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res) => {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({ data: movies, message: 'movies listed' });
    } catch (err) {
      res.status(400).json({ err })
    }
  });

  router.get('/:movieId', async (req, res) => {
    const { movieId } = req.params;

    try {
      const movies = await moviesService.getMovie({ movieId });

      res.status(200).json({ data: movies, message: 'movie retrieved' });
    } catch (err) {
      res.status(400).json({ err })
    }
  });

  router.post('/', async (req, res) => {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie });

      res.status(201).json({ data: createdMovieId, message: 'movie created' });
    } catch (err) {
      res.status(400).json({ err })
    }
  });

  router.put('/:movieId', async (req, res) => {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

      res.status(200).json({ data: updatedMovieId, message: 'movie updated' });
    } catch (err) {
      res.status(400).json({ err })
    }
  });

  router.delete('/:movieId', async (req, res) => {
    const { movieId } = req.params;

    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });

      res.status(200).json({ data: deletedMovieId, message: 'movie deleted' });
    } catch (err) {
      res.status(400).json({ err })
    }
  });
}

module.exports = moviesApi;

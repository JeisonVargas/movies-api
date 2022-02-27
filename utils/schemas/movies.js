const Joi = require('@hapi/joi');

const movieIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const movieTitleSchema = Joi.string().max(80);
const movieReleaseDateSchema = Joi.date().min('1-1-1974');
const movieOverviewSchema = Joi.string().max(600);
const moviePosterPathSchema = Joi.string();
const movieBackdropPathSchema = Joi.string();
const movieVoteAverageSchema = Joi.number().min(0).max(10);
const movieGenresSchema = Joi.array().items(Joi.string());
const moviePrivateSchema = Joi.bool().strict();

const createMovieSchema = {
  title: movieTitleSchema.required(),
  release_date: movieReleaseDateSchema.required(),
  overview: movieOverviewSchema.required(),
  poster_path: moviePosterPathSchema.required(),
  backdrop_path: movieBackdropPathSchema.required(),
  vote_average: movieVoteAverageSchema.required(),
  genres: movieGenresSchema.required(),
  private: moviePrivateSchema.required(),
};

const updateMovieSchema = {
  title: movieTitleSchema,
  release_date: movieReleaseDateSchema,
  overview: movieOverviewSchema,
  poster_path: moviePosterPathSchema,
  backdrop_path: movieBackdropPathSchema,
  vote_average: movieVoteAverageSchema,
  genres: movieGenresSchema,
  private: moviePrivateSchema,
};

const pageSchema = Joi.number().min(1);

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
  pageSchema,
}

const MongoLib = require('../lib/mongo');
const boom = require('@hapi/boom');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async createMovie({ movie, user }) {
    const createMovieId = await this.mongoDB.create(this.collection, {...movie, user_id_create: user._id, user_email_create: user.email });
    return createMovieId;
  }

  async getMoviesPagination({ query, page = 1 }) {
    const movies = await this.mongoDB.getAll(this.collection, query, 10, 10 * (page - 1));
    const total_movies = await this.mongoDB.getAll(this.collection, query);

    let total_pages = Math.ceil(total_movies.length/10);
    if (page > total_pages) {
      throw (boom.badRequest(`page "${page}" is not available`))
    }

    return { page, results: movies || [], total_pages, total_results: total_movies.length }
  }

  async getAllPublicMovies({ page }) {
    const query = { private: false };
    const response = await this.getMoviesPagination({ query, page });
    return response;
  }

  async getMyMovies({ user, page }) {
    const query = { user_id_create: user._id };
    const response = await this.getMoviesPagination({ query, page });
    return response;
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async updateMovie({ movieId, movie, user } = {}) {
    let validateMovie = await this.getMovie({ movieId })

    if (!validateMovie._id) {
      throw (boom.badRequest(`That movie does not exists "movie_id" ${movieId} `))
    }

    if (user.email !== validateMovie.user_email_create) {
      throw (boom.forbidden(`You do not have permission to edit this movie "movie_id" ${movieId} `))
    }

    const updatedMovieId = await this.mongoDB.update(this.collection, movieId, movie);
    return updatedMovieId;
  }

  async deleteMovie({ movieId, user }) {
    let validateMovie = await this.getMovie({ movieId });

    if (!validateMovie._id) {
      throw (boom.badRequest(`That movie does not exists "movie_id" ${movieId} `))
    }

    if (user.email !== validateMovie.user_email_create) {
      throw (boom.forbidden(`You do not have permission to delete this movie "movie_id" ${movieId} `))
    }

    const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }
}

module.exports = MoviesService;

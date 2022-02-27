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

  async getAllPublicMovies() {
    let query = { private: false }
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMyMovies({ user }) {
    const query = { user_id_create: user._id }
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
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

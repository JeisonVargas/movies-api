const proxyquire = require('proxyquire');

const { MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
  const route = proxyquire('../routes/movies', { '../services/movies': MoviesServiceMock });
  const request = testServer(route);

  describe('GET /movies', function() {
    it('should response with status 401 unauthorized', function(done) {
      request.get('/api/movies/all-public').expect(401, done);
    })

  })
})

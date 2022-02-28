const https = require('https');

class ImdbService {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/movie/popular?api_key=21d48dd94eb2105951a273ec15768f0a&language=en-US&page='
  }

  fetch(page) {
    return new Promise((resolve, reject) => {
      https.get(`${this.url}${page}`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      });

    }).on("error", (err) => {
      reject(err.message);
    });
    })
  }

  async getRandowPageMovies() {
    let randowPage = Math.floor(Math.random() * (500 - 1) + 1);
    let data = await this.fetch(randowPage);
    return data;
  }

}

module.exports = ImdbService;

const express = require('express');
const helmet = require('helmet');

const config = require('./config');

const moviesApi = require('./routes/movies');

const app = express();

app.use(express.json());
app.use(helmet());

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
})

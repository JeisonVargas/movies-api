const express = require('express');
const helmet = require('helmet');

const config = require('./config');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');

const { wrapErrors, errorHandler } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

app.use(express.json());
app.use(helmet());

authApi(app);
moviesApi(app);

// Not Found 404
app.use(notFoundHandler);

// Errors middleaware
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
})

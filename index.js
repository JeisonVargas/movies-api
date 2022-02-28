const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const config = require('./config');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');
const imdbApi = require('./routes/imdb');
const swaggerDoc = require('./swagger.json');

const { wrapErrors, errorHandler } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

// Routes
authApi(app);
moviesApi(app);
imdbApi(app);

// Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Not Found 404
app.use(notFoundHandler);

// Errors middleaware
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
})

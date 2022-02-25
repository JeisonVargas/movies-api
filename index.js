const express = require('express');
const helmet = require('helmet');

const config = require('./config');

const app = express();

app.use(express.json);
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hola mundo');
})

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
})

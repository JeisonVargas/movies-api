const boom = require('@hapi/boom');

// Captura el error y valida que sea de tipo boom, si no lo es lo combierte en error de tipo boom.
const wrapErrors = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

// Captura los errores y responde con el respectivo status code y payload.
const errorHandler = (err, req, res, next) => {
  const { output: { statusCode, payload } } = err;

  console.log('Error: ', payload.message);
  res.status(statusCode).json(payload);
}

module.exports = {
  wrapErrors,
  errorHandler,
}

const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const UsersService = require('../../services/users');
const { authSchema } = require('../schemas/users');

passport.use(
  new BasicStrategy(async (email, password, cb) => {

    const { error } = Joi.object(authSchema).validate({ email, password });
    if (error) {
      return cb(boom.badRequest(error), false)
    }

    const userService = new UsersService();

    try {
      const user = await userService.getUser({ email });

      if (!user) {
        return cb(boom.unauthorized(`"email" is not registered`), false);
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(`"password" does not match`), false);
      }

      delete user.password;

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  })
);

const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const UsersService = require('../services/users');
const validationHandler = require('../utils/middleware/validationHandler');
const { authSchema } = require('../utils/schemas/users');
const config= require('../config');

// Basic strategy
require('../utils/auth/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const usersService = new UsersService();

  router.post('/sign-in', async function(req, res, next) {
    passport.authenticate('basic', function(error, user) {
      try {
        if (error || !user) {
          return next(error);
        }

        req.login(user, { session: false }, async function(error) {
          if (error) {
            return next(error);
          }

          const { _id: id, name, email } = user;

          const payload = {
            sub: id,
            email,
          };
          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '20m'
          });

          return res.status(200).json({ token, user: { id, email } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post('/sign-up', validationHandler(authSchema), async (req, res, next) => {
    const { body: user } = req;
    try {
      const createdUserId = await usersService.createUser({ user });
      res.status(201).json({ data: createdUserId, message: 'user created' });
    } catch (error) {
      next(boom.badRequest(error));
    }
  });
}

module.exports = authApi;

const Joi = require('@hapi/joi');

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const authSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(10).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#?\]]).{10,}$/, '(one lowercase letter, one uppercase letter and one of the following characters: !, @, #, ? or ].)').required(),
};

module.exports = {
  userIdSchema,
  authSchema,
};

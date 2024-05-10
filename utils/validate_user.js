const Joi = require("joi");

const userSignUpSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateSignUpSchema = (data) => userSignUpSchema.validate(data);

module.exports = { validateSignUpSchema };

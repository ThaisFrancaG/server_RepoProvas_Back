import Joi from "joi";

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  passwordCheck: Joi.string().required(),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

export { signUpSchema, signInSchema };

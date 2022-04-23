import Joi from "joi";

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordCheck: Joi.string().required(),
});

export { signUpSchema };

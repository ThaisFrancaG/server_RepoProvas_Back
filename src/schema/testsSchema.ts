import Joi from "joi";

const newTestSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string()
    .regex(/\.pdf$/)
    .uri()
    .required(),
  categoryId: Joi.number().required(),
  teacherId: Joi.number().required(),
  disciplineId: Joi.number().required(),
});

export { newTestSchema };

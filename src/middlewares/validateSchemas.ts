import { NextFunction, Request, Response } from "express";

export default function validateSchema(schema) {
  console.log("chegou na validação de schema");
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      console.log(validation.error);
      return res.sendStatus(422);
    }

    next();
  };
}

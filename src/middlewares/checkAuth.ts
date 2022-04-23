import { NextFunction, Request, Response } from "express";
import { prisma } from "../../database.js";

async function validateUserToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    console.log("erro token");
    return res.sendStatus(401);
  }

  next();
}

export default validateUserToken;

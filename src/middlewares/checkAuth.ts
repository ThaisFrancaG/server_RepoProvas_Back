import { NextFunction, Request, Response } from "express";
import { checkSession } from "../repositories/userRepositorie.js";
async function validateUserToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }
  let check = await checkSession(token);
  if (!check) {
    return res.sendStatus(401);
  }

  next();
}

export default validateUserToken;

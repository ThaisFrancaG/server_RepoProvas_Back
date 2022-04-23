import { Request, Response } from "express";
import { prisma } from "../../database.js";
import * as auth from "../services/authServices.js";

async function signUp(req: Request, res: Response) {
  const { email, password, passwordCheck } = req.body;
  if (password !== passwordCheck) {
    throw { code: "409", message: "Password check must be equal to password" };
  }
  await auth.signUp(email, password);
  res.status(201).send("Sign-up sucess");
}

async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;

  const token = await auth.signIn(email, password);

  console.log(token);

  res.status(200).send(token);
}

export { signUp, signIn };

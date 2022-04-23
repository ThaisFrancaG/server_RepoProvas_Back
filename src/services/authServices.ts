import { PassThrough } from "stream";
import { prisma } from "../../database.js";
import * as userRepo from "../repositories/userRepositorie.js";
import bcrypt from "bcrypt";

async function signUp(email: string, password: string) {
  await getEmailInfo(email);
  await newUser(email, password);
}

async function getEmailInfo(email: string) {
  const emailInfo = await userRepo.findByEmail(email);
  if (emailInfo.length > 0) {
    throw { code: "409", message: "Email already in use" };
  }
  return emailInfo;
}

async function newUser(email: string, password: string) {
  const passwordHash = bcrypt.hashSync(password, 10);

  await userRepo.newUser(email, passwordHash);
}

export { signUp };

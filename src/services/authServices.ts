import { PassThrough } from "stream";
import { prisma } from "../../database.js";
import * as userRepo from "../repositories/userRepositorie.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface UserInfo {
  id?: number;
  email: string;
  password: string;
}

async function signUp(email: string, password: string) {
  const checkEmail = await getEmailInfo(email);
  if (checkEmail.length > 0) {
    throw { code: "409", message: "Email already in use" };
  }
  await newUser(email, password);
}

async function signIn(email: string, password: string) {
  const userInfo = await getEmailInfo(email);
  if (userInfo.length === 0) {
    throw { code: "404", message: "Please, sign-up to login" };
  }
  await checkPassword(userInfo[0], password);
  const token = await newSession(userInfo[0]);
  console.log(token);
  return token;
}

async function getEmailInfo(email: string) {
  const emailInfo = await userRepo.findByEmail(email);
  return emailInfo;
}

async function newUser(email: string, password: string) {
  const passwordHash = bcrypt.hashSync(password, 10);

  await userRepo.newUser(email, passwordHash);
}

async function checkPassword(userInfo: UserInfo, password: string) {
  const checkPassword = bcrypt.compareSync(password, userInfo.password);
  if (!checkPassword) {
    throw { code: "401", message: "Check info" };
  }
}

async function checkSession(userInfo: UserInfo) {
  //tá meio solução de fita crepe
  const session = await userRepo.findSession(userInfo.id);
  console.log(session);
  if (session) {
    await userRepo.deleteSession(session.id);
  }
}
async function newSession(userInfo: UserInfo) {
  await checkSession(userInfo);
  const passKey = process.env.JWT_SECRET;
  const token = jwt.sign(userInfo.email, passKey);
  await userRepo.newSession(userInfo.id, token);
  return token;
}

export { signUp, signIn };

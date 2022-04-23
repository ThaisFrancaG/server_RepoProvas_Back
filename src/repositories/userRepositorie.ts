import { prisma } from "../../database.js";

async function findByEmail(email: string) {
  const results = prisma.users.findMany({
    where: { email },
  });

  return results;
}

async function newUser(email: string, password: string) {
  await prisma.users.create({
    data: {
      email: email,
      password: password,
    },
  });
}

async function newSession(userId: number, token: string) {
  await prisma.sessions.create({
    data: {
      userId: userId,
      token: token,
    },
  });
}

export { findByEmail, newUser, newSession };

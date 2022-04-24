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

async function findSession(userId: number) {
  const results = await prisma.sessions.findFirst({
    where: { userId },
  });
  return results;
}

async function checkSession(token: string) {
  const results = await prisma.sessions.findFirst({
    where: { token },
  });
  return results;
}
async function deleteSession(sessionId: number) {
  const results = await prisma.sessions.delete({
    where: { id: sessionId },
  });
  return results;
}

export {
  findByEmail,
  newUser,
  findSession,
  checkSession,
  deleteSession,
  newSession,
};

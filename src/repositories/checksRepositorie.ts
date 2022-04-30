import { prisma } from "../../database.js";

async function checkTestById(testId: number) {
  const test = await prisma.tests.findMany({
    where: { id: testId },
  });

  return test;
}

export { checkTestById };

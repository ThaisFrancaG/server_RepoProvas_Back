import { prisma } from "../../database.js";

async function addTestView(testId: number) {
  await prisma.tests.update({
    where: { id: testId },
    data: { views: { increment: 1 } },
  });
}

export { addTestView };

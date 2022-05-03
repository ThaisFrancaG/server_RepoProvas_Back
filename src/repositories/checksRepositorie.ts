import { prisma } from "../../database.js";

async function checkTestById(testId: number) {
  const test = await prisma.tests.findMany({
    where: { id: testId },
  });

  return test;
}

async function checkTeacherDiscipline(disciplineId: number, teacherId: number) {
  const test = await prisma.teachersDisciplines.findFirst({
    where: { disciplineId: disciplineId, teacherId: teacherId },
  });

  return test;
}

async function checkDuplicatedTest(testName: string, pdfUrl: string) {
  const test = await prisma.tests.findFirst({
    where: { name: testName, pdfUrl: pdfUrl },
  });

  return test;
}

async function checkCategory(categoryId: number) {
  const test = await prisma.categories.findFirst({
    where: { id: categoryId },
  });

  return test;
}

export {
  checkTestById,
  checkTeacherDiscipline,
  checkCategory,
  checkDuplicatedTest,
};

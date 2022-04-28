import { prisma } from "../../database.js";

async function getDisciplines() {
  const results = await prisma.disciplines.findMany();

  return results;
}

async function getTeachers() {
  const results = await prisma.teachers.findMany();

  return results;
}
async function getTestByDiscipline(disciplineId: number) {
  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        disciplineId: disciplineId,
      },
    },
    include: { teacherDiscipline: { include: { teacher: true } } },
  });

  return results;
}

async function getTestByTeacher(teacherId: number) {
  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        teacherId: teacherId,
      },
    },
    include: { teacherDiscipline: { include: { discipline: true } } },
  });
  return results;
}

async function getTerms() {
  return prisma.terms.findMany();
}
async function findMany() {
  return prisma.categories.findMany();
}

export {
  getTestByDiscipline,
  getTestByTeacher,
  getDisciplines,
  getTeachers,
  findMany,
  getTerms,
};

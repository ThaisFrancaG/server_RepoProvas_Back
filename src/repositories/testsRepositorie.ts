import { prisma } from "../../database.js";

async function getTestByDiscipline(disciplineId: number, categorieId: number) {
  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        disciplineId: disciplineId,
      },
      category: { id: categorieId },
    },

    include: { teacherDiscipline: { include: { teacher: true } } },
  });

  return results;
}

async function getTestOneDiscipline(disciplineId: number) {
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
async function getTestByTeacher(teacherId: number, categorieId: number) {
  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        teacherId: teacherId,
      },
      category: { id: categorieId },
    },
    include: { teacherDiscipline: { include: { discipline: true } } },
  });
  return results;
}

async function getTestOneTeacher(teacherId: number) {
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

async function getDisciplinesByTerm(id: number) {
  const results = await prisma.disciplines.findMany({
    where: { termId: id },
  });

  return results;
}

async function getTermsByDiscipline(id: number) {
  const results = await prisma.disciplines.findFirst({
    where: { id: id },
  });

  return results;
}
async function findMany() {
  return prisma.categories.findMany();
}

async function findFilters(tableName: string) {
  const list = [];
  switch (tableName) {
    case "disciplines":
      list.push(await prisma.disciplines.findMany());
      break;
    case "teachers":
      list.push(await prisma.teachers.findMany());
      break;
  }

  return list[0];
}

interface NewTest {
  name: string;
  pdfUrl: string;
  categoryId: number;
  teacherDisciplineId: number;
}
async function createNewTest(testInfo: NewTest) {
  const { name, pdfUrl, categoryId, teacherDisciplineId } = testInfo;

  await prisma.tests.create({
    data: {
      name: name,
      pdfUrl: pdfUrl,
      categoryId: categoryId,
      teacherDisciplineId: teacherDisciplineId,
    },
  });
}
export {
  getTestByDiscipline,
  getTestByTeacher,
  findMany,
  getTerms,
  getDisciplinesByTerm,
  getTestOneDiscipline,
  getTestOneTeacher,
  findFilters,
  getTermsByDiscipline,
  createNewTest,
};

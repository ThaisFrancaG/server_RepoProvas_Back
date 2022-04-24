import { prisma } from "../../database.js";

async function getTestByDiscipline(disciplineId: number) {
  console.log("chegou no repo");

  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        disciplineId: disciplineId,
      },
    },
  });

  return results;
}

async function getTestByTeacher(teacherId: number) {
  console.log("chegou no repo teacher");

  const results = await prisma.tests.findMany({
    where: {
      teacherDiscipline: {
        teacherId: teacherId,
      },
    },
  });

  return results;
}

export { getTestByDiscipline, getTestByTeacher };

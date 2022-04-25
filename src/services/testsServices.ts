import * as testsRepo from "../repositories/testsRepositorie.js";

async function getTestsDiscipline(id: number) {
  const testsList = await testsRepo.getTestByDiscipline(id);

  return testsList;
}

async function getTestsTeacher(id: number) {
  const testsList = await testsRepo.getTestByTeacher(id);

  return testsList;
}

async function getTeachers() {
  const teachersList = await testsRepo.getTeachers();

  return teachersList;
}

async function getDisciplines() {
  const disciplinesList = await testsRepo.getDisciplines();

  return disciplinesList;
}

export { getTestsDiscipline, getTestsTeacher, getTeachers, getDisciplines };

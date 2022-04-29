import * as testsRepo from "../repositories/testsRepositorie.js";

async function getTestsDiscipline(disciplineId: number, categorieId: number) {
  const testsList = await testsRepo.getTestByDiscipline(
    disciplineId,
    categorieId
  );

  return testsList;
}

async function getTestsOneDiscipline(disciplineId: number) {
  const testsList = await testsRepo.getTestOneDiscipline(disciplineId);

  return testsList;
}
async function getTestsOneTeacher(teacherId: number) {
  ("chegou service teacher");

  const testsList = await testsRepo.getTestOneTeacher(teacherId);

  return testsList;
}
async function getTestsTeacher(id: number, categorieId: number) {
  const testsList = await testsRepo.getTestByTeacher(id, categorieId);

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

async function getDisciplinesByTerm(termId: number) {
  const disciplinesList = await testsRepo.getDisciplinesByTerm(termId);
  const categories = await testsRepo.findMany();

  return { categories, disciplinesList };
}
async function getTerms() {
  const getTermsList = await testsRepo.getTerms();

  return getTermsList;
}

async function getCategories() {
  const categoriesList = await testsRepo.findMany();
  return categoriesList;
}

export {
  getTestsDiscipline,
  getTestsTeacher,
  getTeachers,
  getDisciplines,
  getDisciplinesByTerm,
  getCategories,
  getTerms,
  getTestsOneDiscipline,
  getTestsOneTeacher,
};

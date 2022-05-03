import * as testsRepo from "../repositories/testsRepositorie.js";
import * as testsInteractions from "../repositories/testsInteractionsRepositorie.js";
import * as checks from "../repositories/checksRepositorie.js";
async function addTestView(testId: number) {
  const checkTestId = await checks.checkTestById(testId);

  if (checkTestId.length === 0) {
    throw { code: "404", message: "Test not Found" };
  }
  await testsInteractions.addTestView(testId);
}
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
  const testsList = await testsRepo.getTestOneTeacher(teacherId);

  return testsList;
}
async function getTestsTeacher(id: number, categorieId: number) {
  const testsList = await testsRepo.getTestByTeacher(id, categorieId);

  return testsList;
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
  getDisciplinesByTerm,
  getCategories,
  getTerms,
  getTestsOneDiscipline,
  getTestsOneTeacher,
  addTestView,
};

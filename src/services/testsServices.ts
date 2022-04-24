import * as testsRepo from "../repositories/testsRepositorie.js";

async function getTestsDiscipline(id: number) {
  const testsList = await testsRepo.getTestByDiscipline(id);

  console.log(testsList.length);
  return testsList;
}

async function getTestsTeacher(id: number) {
  const testsList = await testsRepo.getTestByTeacher(id);

  console.log(testsList.length);
  return testsList;
}

export { getTestsDiscipline, getTestsTeacher };

import * as filtersRepo from "../repositories/testsRepositorie.js";
async function getDisciplines(filter: string) {
  const disciplinesList = await filtersRepo.findFilters(filter);

  return disciplinesList;
}

async function getTeachers(filter: string) {
  const teachersList = await filtersRepo.findFilters(filter);

  return teachersList;
}
export { getDisciplines, getTeachers };

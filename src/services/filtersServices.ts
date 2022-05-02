import * as filtersRepo from "../repositories/testsRepositorie.js";
async function getDisciplines(filter: string) {
  console.log(filter);
  const disciplinesList = await filtersRepo.findFilters(filter);
  console.log(disciplinesList);
  return disciplinesList;
}

async function getTeachers(filter: string) {
  const teachersList = await filtersRepo.findFilters(filter);
  console.log(teachersList);
  return teachersList;
}
export { getDisciplines, getTeachers };

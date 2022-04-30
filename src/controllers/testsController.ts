import { Request, Response } from "express";
import * as services from "../services/testsServices.js";

async function getTerms(req: Request, res: Response) {
  const terms = await services.getTerms();

  res.send(terms);
}

async function getDisciplines(req: Request, res: Response) {
  const disciplinesList = await services.getDisciplines();
  res.send(disciplinesList);
}

async function getCategories(req: Request, res: Response) {
  const categories = await services.getCategories();
  res.send(categories);
}

async function getTeachers(req: Request, res: Response) {
  const teachers = await services.getTeachers();

  res.send(teachers);
}

async function getTestsList(req: Request, res: Response) {
  const { id, categorieId } = req.params;

  if (!id || parseInt(id) !== parseInt(id)) {
    throw { code: "400", message: "Something went wrong" };
  }

  const pathFilter = req.path.split("/")[2];

  if (pathFilter === "discipline") {
    const testsList = await services.getTestsDiscipline(
      parseInt(id),
      parseInt(categorieId)
    );
    return res.status(200).send(testsList);
  }

  if (pathFilter === "teacher") {
    const testsList = await services.getTestsTeacher(
      parseInt(id),
      parseInt(categorieId)
    );

    return res.status(200).send(testsList);
  }

  res.sendStatus(400);
}

async function getTestsFiltered(req: Request, res: Response) {
  const { id } = req.params;

  if (!id || parseInt(id) !== parseInt(id)) {
    throw { code: "400", message: "Something went wrong" };
  }
  const pathFilter = req.path.split("/")[2];

  if (pathFilter === "disciplines") {
    const testsList = await services.getTestsOneDiscipline(parseInt(id));

    return res.status(200).send(testsList);
  }

  if (pathFilter === "teachers") {
    const testsList = await services.getTestsOneTeacher(parseInt(id));

    return res.status(200).send(testsList);
  }
}

async function getDisciplinesByTerms(req: Request, res: Response) {
  const { termId } = req.params;

  const categoriesList = await services.getCategories();
  const disciplinesList = await services.getDisciplinesByTerm(parseInt(termId));

  res.send({ disciplinesList, categoriesList });
}

export {
  getTestsList,
  getTerms,
  getTeachers,
  getDisciplinesByTerms,
  getCategories,
  getDisciplines,
  getTestsFiltered,
};

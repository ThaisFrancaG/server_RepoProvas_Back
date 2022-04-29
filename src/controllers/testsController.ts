import { Request, Response } from "express";
import * as services from "../services/testsServices.js";

async function getTestsList(req: Request, res: Response) {
  const { id, categorieId } = req.params;
  console.log("categorieId" + categorieId);
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
    console.log(testsList);
    return res.status(200).send(testsList);
  }

  res.sendStatus(400);
}

async function getTeachers(req: Request, res: Response) {
  const teachers = await services.getTeachers();
  console.log(teachers);
  res.send(teachers);
}

async function getCategories(req: Request, res: Response) {
  const categories = await services.getCategories();
  console.log(categories);

  res.send(categories);
}

async function getDisciplinesByTerms(req: Request, res: Response) {
  const { termId } = req.params;
  console.log(termId);
  const categoriesList = await services.getCategories();
  const disciplinesList = await services.getDisciplinesByTerm(parseInt(termId));

  res.send({ disciplinesList, categoriesList });
}

async function getTerms(req: Request, res: Response) {
  const terms = await services.getTerms();
  console.log(terms);
  res.send(terms);
}

export {
  getTestsList,
  getTerms,
  getTeachers,
  getDisciplinesByTerms,
  getCategories,
};

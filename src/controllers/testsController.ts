import { Request, Response } from "express";
import * as services from "../services/testsServices.js";
import * as filters from "../services/filtersServices.js";
async function getTerms(req: Request, res: Response) {
  const terms = await services.getTerms();

  res.send(terms);
}

async function getCategories(req: Request, res: Response) {
  const categories = await services.getCategories();
  res.send(categories);
}

async function getTestsFiltered(req: Request, res: Response) {
  const { filter, filterId } = req.params;

  if (!filterId || parseInt(filterId) !== parseInt(filterId)) {
    throw { code: "400", message: "Something went wrong" };
  }

  if (filter === "disciplines") {
    const testsListD = await services.getTestsOneDiscipline(parseInt(filterId));

    return res.status(200).send(testsListD);
  }

  if (filter === "teachers") {
    const testsListT = await services.getTestsOneTeacher(parseInt(filterId));
    return res.status(200).send(testsListT);
  }

  res.sendStatus(400);
}

async function getTestsFilteredCategory(req: Request, res: Response) {
  const { filter, filterId, categoryId } = req.params;

  if (!filterId || parseInt(filterId) !== parseInt(filterId)) {
    throw { code: "400", message: "Something went wrong" };
  }

  if (filter === "discipline") {
    const testsListD = await services.getTestsDiscipline(
      parseInt(filterId),
      parseInt(categoryId)
    );

    return res.status(200).send(testsListD);
  }

  if (filter === "teacher") {
    const testsListT = await services.getTestsTeacher(
      parseInt(filterId),
      parseInt(categoryId)
    );
    return res.status(200).send(testsListT);
  }

  res.sendStatus(400);
}

async function getDisciplinesByTerms(req: Request, res: Response) {
  const { termId } = req.params;

  const categoriesList = await services.getCategories();
  const disciplinesList = await services.getDisciplinesByTerm(parseInt(termId));

  res.send({ disciplinesList, categoriesList });
}
async function getFilter(req: Request, res: Response) {
  const { filter } = req.params;

  if (filter === "disciplines") {
    const list = await filters.getDisciplines(filter.toString());
    return res.status(200).send(list);
  }
  if (filter === "teachers") {
    const list = await filters.getTeachers(filter.toString());
    return res.status(200).send(list);
  }

  res.status(400);
}

export {
  getTerms,
  getDisciplinesByTerms,
  getCategories,
  getTestsFiltered,
  getTestsFilteredCategory,
  getFilter,
};

import { Request, Response } from "express";
import * as services from "../services/testsServices.js";

async function getTestsList(req: Request, res: Response) {
  const { id } = req.params;

  if (!id || parseInt(id) !== parseInt(id)) {
    throw { code: "400", message: "Something went wrong" };
  }

  const pathFilter = req.path.split("/")[2];

  if (pathFilter === "discipline") {
    const testsList = await services.getTestsDiscipline(parseInt(id));
    return res.status(200).send(testsList);
  }

  if (pathFilter === "teacher") {
    const testsList = await services.getTestsTeacher(parseInt(id));
    return res.status(200).send(testsList);
  }

  res.sendStatus(400);
}

export { getTestsList };

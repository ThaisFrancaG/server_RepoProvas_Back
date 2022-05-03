import { Request, Response } from "express";
import * as services from "../services/testsServices.js";

async function updateTest(req: Request, res: Response) {
  const { testId } = req.params;

  await services.addTestView(parseInt(testId));

  res.sendStatus(200);
}

async function newTest(req: Request, res: Response) {
  const testInfo = req.body;

  await services.newTest(testInfo);

  res.sendStatus(200);
}

export { updateTest, newTest };

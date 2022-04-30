import { Request, Response } from "express";
import * as services from "../services/testsServices.js";

async function updateTest(req: Request, res: Response) {
  const { testId } = req.params;

  console.log(testId);

  await services.addTestView(parseInt(testId));

  res.sendStatus(200);
}

export { updateTest };

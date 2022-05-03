import { Request, Response } from "express";
import * as services from "../services/newTestsServices.js";

async function newTest(req: Request, res: Response) {
  const testInfo = req.body;

  console.log(testInfo);
  await services.newTest(testInfo);

  res.sendStatus(200);
}

export { newTest };

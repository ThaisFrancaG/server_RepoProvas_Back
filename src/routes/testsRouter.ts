import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as testsGet from "../controllers/testsController.js";
import * as testsUpdate from "../controllers/updateTestsController.js";

const testRouter = Router();

testRouter.get(
  "/tests/discipline/:id/:categorieId",
  validateUserToken,
  testsGet.getTestsList
);
testRouter.get(
  "/tests/teacher/:id/:categorieId",
  validateUserToken,
  testsGet.getTestsList
);

testRouter.get(
  "/tests/teachers/:id",
  validateUserToken,
  testsGet.getTestsFiltered
);

testRouter.get(
  "/tests/disciplines/:id",
  validateUserToken,
  testsGet.getTestsFiltered
);

testRouter.patch(
  "/tests/views/:testId",
  validateUserToken,
  testsUpdate.updateTest
);

export default testRouter;

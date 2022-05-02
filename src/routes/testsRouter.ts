import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as testsGet from "../controllers/testsController.js";
import * as testsUpdate from "../controllers/updateTestsController.js";

const testRouter = Router();

testRouter.get(
  "/discipline/:id/:categorieId",
  validateUserToken,
  testsGet.getTestsList
);
testRouter.get(
  "/teacher/:id/:categorieId",
  validateUserToken,
  testsGet.getTestsList
);

testRouter.get("/teachers/:id", validateUserToken, testsGet.getTestsFiltered);

testRouter.get(
  "/disciplines/:id",
  validateUserToken,
  testsGet.getTestsFiltered
);

testRouter.patch("/views/:testId", validateUserToken, testsUpdate.updateTest);

export default testRouter;

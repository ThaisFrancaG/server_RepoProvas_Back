import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import {
  getTestsList,
  getTestsFiltered,
} from "../controllers/testsController.js";
const testRouter = Router();

testRouter.get(
  "/tests/discipline/:id/:categorieId",
  validateUserToken,
  getTestsList
);
testRouter.get(
  "/tests/teacher/:id/:categorieId",
  validateUserToken,
  getTestsList
);

testRouter.get("/tests/teachers/:id", validateUserToken, getTestsFiltered);

testRouter.get("/tests/disciplines/:id", validateUserToken, getTestsFiltered);

export default testRouter;

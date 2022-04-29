import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import { getTestsList } from "../controllers/testsController.js";
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

export default testRouter;

import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as testsGet from "../controllers/testsController.js";
import * as testsUpdate from "../controllers/updateTestsController.js";

const testRouter = Router();

testRouter.get(
  "/categories/:filter/:filterId/:categoryId",
  validateUserToken,
  testsGet.getTestsFilteredCategory
);

testRouter.get(
  "/tests/:filter/:filterId",
  validateUserToken,
  testsGet.getTestsFiltered
);

testRouter.patch("/views/:testId", validateUserToken, testsUpdate.updateTest);

export default testRouter;

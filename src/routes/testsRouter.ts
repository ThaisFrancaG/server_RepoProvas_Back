import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import validateSchema from "../middlewares/validateSchemas.js";
import * as testsGet from "../controllers/testsController.js";
import * as testsUpdate from "../controllers/updateTestsController.js";
import { newTestSchema } from "../schema/testsSchema.js";
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

testRouter.post(
  "/tests/add",
  validateUserToken,
  validateSchema(newTestSchema),
  testsUpdate.newTest
);

export default testRouter;

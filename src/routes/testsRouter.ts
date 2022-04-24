import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import { getTestsList } from "../controllers/testsController.js";
const testRouter = Router();

testRouter.get("/tests/discipline/:id", validateUserToken, getTestsList);
testRouter.get("/tests/teacher/:id", validateUserToken, getTestsList);

export default testRouter;

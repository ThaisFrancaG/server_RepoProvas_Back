import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import { getTestsDiscipline } from "../controllers/testsController.js";
const testRouter = Router();

testRouter.get("/tests/discipline", validateUserToken, getTestsDiscipline);

export default testRouter;

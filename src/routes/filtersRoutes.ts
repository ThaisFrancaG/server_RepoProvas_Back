import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import { getFilterList } from "../controllers/testsController.js";

const filterRouter = Router();

filterRouter.get("/disciplines", validateUserToken, getFilterList);
filterRouter.get("/teachers", validateUserToken, getFilterList);

export default filterRouter;

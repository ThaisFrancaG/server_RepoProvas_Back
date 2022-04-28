import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as get from "../controllers/testsController.js";

const filterRouter = Router();

filterRouter.get("/disciplines", validateUserToken, get.getFilterList);
filterRouter.get("/teachers", validateUserToken, get.getFilterList);
filterRouter.get("/terms", validateUserToken, get.getTerms);
filterRouter.get("/categories", validateUserToken, get.getCategories);

export default filterRouter;

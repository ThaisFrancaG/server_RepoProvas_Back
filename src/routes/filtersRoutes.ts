import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import {
  getCategories,
  getFilterList,
} from "../controllers/testsController.js";

const filterRouter = Router();

filterRouter.get("/disciplines", validateUserToken, getFilterList);
filterRouter.get("/teachers", validateUserToken, getFilterList);
filterRouter.get("/categories", validateUserToken, getCategories);

export default filterRouter;

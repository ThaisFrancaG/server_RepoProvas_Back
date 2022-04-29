import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as get from "../controllers/testsController.js";

const filterRouter = Router();

filterRouter.get("/search/disciplines", validateUserToken, get.getDisciplines);
filterRouter.get("/search/teachers", validateUserToken, get.getTeachers);

filterRouter.get("/disciplines", validateUserToken, get.getTerms);
filterRouter.get("/teachers", validateUserToken, get.getTeachers);
filterRouter.get("/categories", validateUserToken, get.getCategories);

filterRouter.get(
  "/:termId/disciplines",
  validateUserToken,
  get.getDisciplinesByTerms
);
export default filterRouter;

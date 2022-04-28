import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as get from "../controllers/testsController.js";

const filterRouter = Router();

filterRouter.get("/disciplines", validateUserToken, get.getTerms);
filterRouter.get("/teachers", validateUserToken, get.getTeachers);
filterRouter.get(
  "/:termId/disciplines",
  validateUserToken,
  get.getDisciplinesByTerms
);
export default filterRouter;

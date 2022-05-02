import Router from "express";
import validateUserToken from "../middlewares/checkAuth.js";
import * as get from "../controllers/testsController.js";

const filterRouter = Router();

filterRouter.get("/terms", validateUserToken, get.getTerms);

filterRouter.get("/categories", validateUserToken, get.getCategories);

filterRouter.get("/filter/:filter", validateUserToken, get.getFilter);

filterRouter.get(
  "/:termId/disciplines",
  validateUserToken,
  get.getDisciplinesByTerms
);
export default filterRouter;

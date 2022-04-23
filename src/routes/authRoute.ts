import Router from "express";
import { signUpSchema } from "../schema/authSchemas.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { signUp } from "../controllers/authController.js";
const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);

export default authRouter;

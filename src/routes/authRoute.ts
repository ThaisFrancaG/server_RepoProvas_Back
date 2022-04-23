import Router from "express";
import { signUpSchema, signInSchema } from "../schema/authSchemas.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { signUp, signIn } from "../controllers/authController.js";
const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(signInSchema), signIn);

export default authRouter;

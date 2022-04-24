import Router from "express";
import { signUpSchema, signInSchema } from "../schema/authSchemas.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { signUp, signIn, logOut } from "../controllers/authController.js";
import validateUserToken from "../middlewares/checkAuth.js";
const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(signInSchema), signIn);
authRouter.post("/log-out", validateUserToken, logOut);
export default authRouter;

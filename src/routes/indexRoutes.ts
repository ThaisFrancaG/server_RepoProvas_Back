import Router from "express";
import authRouter from "./authRoute.js";

const router = Router();

router.use(authRouter);
export default router;

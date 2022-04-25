import Router from "express";
import authRouter from "./authRoute.js";
import testRouter from "./testsRouter.js";
import filterRouter from "./filtersRoutes.js";
const router = Router();

router.use(authRouter);
router.use(testRouter);
router.use(filterRouter);

export default router;

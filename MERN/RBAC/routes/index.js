import authRouter from "./auth/index.js"
import userRouter from "./user/index.js"
import songRouter from "./song/index.js"
import  express  from 'express';
import authentication from "../middlewares/authentication.js";

const router = express.Router()
router.use("/auth",authRouter);
router.use(authentication)
router.use("/user",userRouter)
router.use("/song",songRouter)
export default router



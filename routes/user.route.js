import {Router} from "express";
import {insertUser, getUsersDetail} from "../controllers/user.controller.js"

const router = Router();

router.get("/", getUsersDetail);
router.post("/add", insertUser);

export {router};


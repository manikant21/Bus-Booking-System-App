import {Router} from "express";

const router = Router();

router.get("/", getUserDetail);

export {router};
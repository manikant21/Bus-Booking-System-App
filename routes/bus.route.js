import { Router } from "express";
import {getBusDetails, insertBus, busesWithAvailableSeat} from "../controllers/bus.controller.js"

const router = Router();

router.get("/", getBusDetails);
router.post("/add", insertBus);
router.get("/available/:seats", busesWithAvailableSeat);

export {router};
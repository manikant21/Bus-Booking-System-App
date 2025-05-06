import { Router } from "express";
import {getBusDetails, insertBus, busesWithAvailableSeat, getUserDetailsWithBooking} from "../controllers/bus.controller.js"

const router = Router();

router.get("/", getBusDetails);
router.post("/add", insertBus);
router.get("/available/:seats", busesWithAvailableSeat);
router.get("/:id/bookings", getUserDetailsWithBooking);

export {router};
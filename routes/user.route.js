import {Router} from "express";
import {insertUser, getUsersDetail, getBusDetailsWithBooking} from "../controllers/user.controller.js"

const router = Router();

router.get("/", getUsersDetail);
router.post("/add", insertUser);
router.get("/:id/bookings", getBusDetailsWithBooking);

export {router};


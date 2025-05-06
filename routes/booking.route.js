import {Router} from "express";
import { getBookingDetail, insertBookingDetails } from "../controllers/booking.controller.js";

const router = Router();

router.get("/", getBookingDetail);
router.post("/add", insertBookingDetails);

export {router};
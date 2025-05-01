import express from "express";
import dotenv from "dotenv";
import { router as userRoute } from "./routes/user.route.js";
import { router as busRoute } from "./routes/bus.route.js";


dotenv.config();
const app = express();
app.use(express.json());


app.use("/api/v1/users", userRoute);
app.use("/api/v1/buses", busRoute);



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})
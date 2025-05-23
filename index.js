import express from "express";
import dotenv from "dotenv";
import { router as userRoute } from "./routes/user.route.js";
import { router as busRoute } from "./routes/bus.route.js";
import {router as bookingRoute} from "./routes/booking.route.js"
import { sequelize } from "./config/db.config.js";


dotenv.config();
const app = express();
app.use(express.json());


app.use("/api/v1/users", userRoute);
app.use("/api/v1/buses", busRoute);
app.use("/api/v1/bookings", bookingRoute);



const PORT = process.env.PORT || 5000;

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running at ${PORT}`);
    });
}).catch((err) =>  {
    console.log(err);
})

// app.listen(PORT, () => {
//     console.log(`Server is up and running at ${PORT}`);
// })
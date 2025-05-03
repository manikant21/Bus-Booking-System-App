import { sequelize } from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Bookings = sequelize.define('Bookings', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

})


export default Bookings;
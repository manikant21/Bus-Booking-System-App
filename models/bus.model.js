import { sequelize } from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Buses = sequelize.define('Buses', {
    bus_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    busNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Buses;
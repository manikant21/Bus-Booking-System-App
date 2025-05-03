import { sequelize } from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Payments = sequelize.define('Payments', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amountPaid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Payments;
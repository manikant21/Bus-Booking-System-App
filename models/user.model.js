import { sequelize } from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Users = sequelize.define('Users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Users;
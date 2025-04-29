import express from "express";
import dotenv from "dotenv";
import {db} from "./config/db.config.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

async function testDbConnection () {
    try {
        console.log("Connected to DB successfully");
        const createUsersTable = `CREATE TABLE IF NOT EXISTS Users 
        (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)

        )`
        await db.execute(createUsersTable);
        console.log("Users table created");

        const createBusesTable = `CREATE TABLE IF NOT EXISTS Buses (
            bus_id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber INT,
            totalSeats INT,
            availableSeats INT
        )`
        await db.execute(createBusesTable);
        console.log("Buses table created");

        const createBookingTable = `CREATE TABLE IF NOT EXISTS Booking (
            booking_id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        ) `
        await db.execute(createBookingTable);
        console.log("Booking table created");

        const createPaymentTable = `CREATE TABLE IF NOT EXISTS Payment (
            payment_id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(255)
        ) `
        await db.execute(createPaymentTable);
        console.log("Payment table created");


        

        
    }
    catch (error) {
        console.error("Error connecting to DB:", error.message);
    }
}

testDbConnection();

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})
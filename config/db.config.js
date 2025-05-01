import mysql from "mysql2/promise";
import dotenv from "dotenv";


dotenv.config();

const db =  await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

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

export {db};
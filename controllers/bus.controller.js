import { db } from "../config/db.config.js";

export const insertBus = async (req, res) => {
    try{
        const { busNumber, totalSeats, availableSeats} = req.body;
        if(! busNumber|| !totalSeats || !availableSeats) {
            return res.status(400).json({"msg":"Some fields are missing"});
        }
        const insertBusDetail = 'INSERT INTO Buses  (busNumber,  totalSeats, availableSeats) VALUES (?, ?, ?)';
        const [result] = await db.execute(insertBusDetail, [busNumber, totalSeats, availableSeats]);
        console.log(`Inserted bus: ${busNumber}, ID: ${result.insertId}`);
        return res.status(201).json({ msg: `Bus ${busNumber} added successfully` });
    }
    catch(err) {
        console.error("Insert error:", err);
        return res.status(500).json({ msg: "Error occurred while inserting bus detail" });
    }
}

export const getBusDetails = async (req, res) => {
    try{
        const userDetails = 'SELECT * FROM Buses';
        const [rows] = await  db.execute(userDetails);
        return res.status(200).json({ msg: rows });
    }
    catch(err) {
        console.error("Select error:", err);
        return res.status(500).json({ msg: "Error occurred while fetching buses" });
    }
}

export const busesWithAvailableSeat = async (req, res) => {
    try{
        const seats = req.params.seats;
        console.log(seats);
        const busesWithSeats = 'SELECT * FROM Buses WHERE availableSeats > ?'
        const [rows] = await db.execute(busesWithSeats, [seats]);
        return res.status(200).json({ msg: rows });
    }
    catch(err) {
        console.error("Select error:", err);
        return res.status(500).json({ msg: "Error occurred while fetching buses with available seats" });
    }
}
import { Op } from "sequelize";
import {Buses, Bookings, Users} from "../models/index.model.js";


export const insertBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;
        if (!busNumber || !totalSeats || !availableSeats) {
            return res.status(400).json({ "msg": "Some fields are missing" });
        }
        const bus = await Buses.create({
            busNumber: busNumber,
            totalSeats: totalSeats,
            availableSeats: availableSeats

        })
        return res.status(200).json({msg: `Bus with busNumber: ${busNumber} createed`})
    } catch (error) {
        console.error("Insert error:", error);
        return res.status(500).json({ msg: "Error occurred while inserting bus detail" });
    }
}


export const getBusDetails = async (req, res) => {
    try {
        const busDetails = await Buses.findAll();
        return res.status(200).json({msg: busDetails});
    } catch (error) {
        console.error("Select error:", error);
        return res.status(500).json({ msg: "Error occurred while fetching buses" });
    }

}


export const busesWithAvailableSeat = async (req, res) => {
    try {
        const seats = req.params.seats;
        const busesWithSeats = await Buses.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
            }
        })
        return res.status(200).json({msg: busesWithSeats});
    } catch (error) {
        console.error("Select error:", error);
        return res.status(500).json({ msg: "Error occurred while fetching buses with available seats" });
    }
}

export const getUserDetailsWithBooking = async(req,res) => {
    try {
        const bookings = await Bookings.findAll({
            where: { BusId: req.params.id },
            include: {
              model: Users,
              attributes: ["name", "email"]
            }
          });

          return res.status(200).json({bookings});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error occurred while fetching data" });
    }
}

// import { db } from "../config/db.config.js";

// export const insertBus = async (req, res) => {
//     try{
//         const { busNumber, totalSeats, availableSeats} = req.body;
//         if(! busNumber|| !totalSeats || !availableSeats) {
//             return res.status(400).json({"msg":"Some fields are missing"});
//         }
//         const insertBusDetail = 'INSERT INTO Buses  (busNumber,  totalSeats, availableSeats) VALUES (?, ?, ?)';
//         const [result] = await db.execute(insertBusDetail, [busNumber, totalSeats, availableSeats]);
//         console.log(`Inserted bus: ${busNumber}, ID: ${result.insertId}`);
//         return res.status(201).json({ msg: `Bus ${busNumber} added successfully` });
//     }
//     catch(err) {
//         console.error("Insert error:", err);
//         return res.status(500).json({ msg: "Error occurred while inserting bus detail" });
//     }
// }

// export const getBusDetails = async (req, res) => {
//     try{
//         const userDetails = 'SELECT * FROM Buses';
//         const [rows] = await  db.execute(userDetails);
//         return res.status(200).json({ msg: rows });
//     }
//     catch(err) {
//         console.error("Select error:", err);
//         return res.status(500).json({ msg: "Error occurred while fetching buses" });
//     }
// }

// export const busesWithAvailableSeat = async (req, res) => {
//     try{
//         const seats = req.params.seats;
//         console.log(seats);
//         const busesWithSeats = 'SELECT * FROM Buses WHERE availableSeats > ?'
//         const [rows] = await db.execute(busesWithSeats, [seats]);
//         return res.status(200).json({ msg: rows });
//     }
//     catch(err) {
//         console.error("Select error:", err);
//         return res.status(500).json({ msg: "Error occurred while fetching buses with available seats" });
//     }
// }
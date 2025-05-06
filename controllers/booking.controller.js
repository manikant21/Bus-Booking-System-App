import {Bookings} from "../models/index.model.js";

export const insertBookingDetails = async (req,res) => {
    try{
    const {userId, busId, seatNumber} = req.body;
    const booking = await Bookings.create({
        userId: userId,
        busId: busId,
        seatNumber: seatNumber
    })

    return res.status(201).json({booking});
}
catch(err) {
    console.log(err);
    return res.status(500).json({msg: "Unable insert data into Booking table"})
}
}

export const getBookingDetail = async (req, res) => {
    try {
        const booking = await Bookings.findAll();
        return res.status(200).json({data: booking});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Unable fetch data from Booking table"});
    }
}
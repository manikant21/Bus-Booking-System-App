import { db } from "../config/db.config.js";

export const insertUser = async (req,res) => {
    try {
        const { name , email} = req.body;
        if (!name || !email) {
            return res.status(400).json({ msg: "Name and email are required" });
        }
        const insertUser = 'INSERT INTO Users (name, email) VALUES (?, ?)';
        const [result] = await db.execute(insertUser, [name, email]);
        console.log(`Inserted user: ${name}, ID: ${result.insertId}`);
        return res.status(201).json({ msg: `User ${name} added successfully` });

    }
    catch(err) {
        console.error("Insert error:", err);
        return res.status(500).json({ msg: "Error occurred while inserting user" });
    }

}

export const getUsersDetail =  async (req,res) => {
    try{
        const userDetails = 'SELECT * FROM Users';
        const [rows] = await db.execute(userDetails);
        return res.status(200).json({ msg: rows });
    }
    catch(err) {
        console.error("Select error:", err);
        return res.status(500).json({ msg: "Error occurred while fetching users" });
    }
}


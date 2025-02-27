const Device = require("../models/Device");

// Get all devices accessible by user
const getDevices = async (req, res) => {
    try {
        const devices = await Device.find({ allowedUsers: req.user.username });
        res.json(devices);
    } catch (error) {
        res.status(500).json({ message: "Error fetching devices", error });
    }
};

// Add a new device
const addDevice = async (req, res) => {
    const { deviceId, numScales } = req.body;

    try {
        const newDevice = await Device.create({
            deviceId,
            createdAt: new Date(),
            numScales,
            owner: req.user.username,
            allowedUsers: [req.user.username]
        });

        res.status(201).json({ message: "Device added successfully", device: newDevice });
    } catch (error) {
        res.status(500).json({ message: "Failed to add device", error });
    }
};

module.exports = { getDevices, addDevice };

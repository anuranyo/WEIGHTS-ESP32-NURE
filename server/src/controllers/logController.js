const Log = require("../models/Log");

// Get logs for a device
const getLogs = async (req, res) => {
    try {
        const logs = await Log.find({ deviceId: req.params.deviceId }).sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching logs", error });
    }
};

// Add a new log entry
const addLog = async (req, res) => {
    try {
        const newLog = await Log.create(req.body);
        res.status(201).json({ message: "Log added successfully", log: newLog });
    } catch (error) {
        res.status(500).json({ message: "Failed to add log", error });
    }
};

module.exports = { getLogs, addLog };

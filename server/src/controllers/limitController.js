const Limit = require("../models/Limit");

// Get weight limits for a device
const getLimits = async (req, res) => {
    try {
        const limits = await Limit.findOne({ deviceId: req.params.deviceId });

        if (!limits) {
            return res.status(404).json({ message: "Limits not found for this device" });
        }

        res.json(limits);
    } catch (error) {
        res.status(500).json({ message: "Error fetching limits", error });
    }
};

// Set or update weight limits for a device
const setLimits = async (req, res) => {
    const { deviceId, limits } = req.body;

    try {
        const updatedLimits = await Limit.findOneAndUpdate(
            { deviceId },
            { limits },
            { new: true, upsert: true } // Creates if not exists, updates if exists
        );

        res.json({ message: "Limits updated successfully", limits: updatedLimits });
    } catch (error) {
        res.status(500).json({ message: "Failed to update limits", error });
    }
};

module.exports = { getLimits, setLimits };

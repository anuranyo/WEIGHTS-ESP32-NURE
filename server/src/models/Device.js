const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  numScales: { type: Number, required: true },
  owner: { type: String, required: true }, 
  allowedUsers: [{ type: String }] 
});

module.exports = mongoose.model("Device", DeviceSchema);

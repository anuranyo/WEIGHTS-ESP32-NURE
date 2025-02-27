const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  weights: {
    scale1: { type: Number, required: true },
    scale2: { type: Number, required: true },
    scale3: { type: Number, required: true },
    scale4: { type: Number, required: true }
  }
});

module.exports = mongoose.model("Log", LogSchema);

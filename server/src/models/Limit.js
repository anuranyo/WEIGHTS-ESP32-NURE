const mongoose = require("mongoose");

const LimitSchema = new mongoose.Schema({
  deviceId: { type: String, required: true, unique: true },
  limits: {
    scale1: { min: { type: Number, required: true }, max: { type: Number, required: true } },
    scale2: { min: { type: Number, required: true }, max: { type: Number, required: true } },
    scale3: { min: { type: Number, required: true }, max: { type: Number, required: true } },
    scale4: { min: { type: Number, required: true }, max: { type: Number, required: true } }
  }
});

module.exports = mongoose.model("Limit", LimitSchema);

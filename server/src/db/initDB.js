require("dotenv").config();
const mongoose = require("mongoose");

// Import models
const User = require("../models/User");
const Device = require("../models/Device");
const Log = require("../models/Log");
const Limit = require("../models/Limit");

// Use MONGO_URI directly without additional parameters
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log(`✅ Connected to MongoDB: ${mongoURI}`))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Function to create collections
const createCollections = async () => {
  try {
    console.log("🔹 Creating collections...");

    await User.createCollection();
    await Device.createCollection();
    await Log.createCollection();
    await Limit.createCollection();

    console.log("✅ Collections created successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error creating collections:", error);
    mongoose.connection.close();
  }
};

// Run collection creation
createCollections();

require("dotenv").config();
const mongoose = require("mongoose");

// Define the database name explicitly
const dbName = "WEIGHTS-ESP32";
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(`✅ Connected to MongoDB database: ${dbName}`);
    clearDatabase();
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    mongoose.connection.close();
  });

const clearDatabase = async () => {
  try {
    console.log(`🔹 Dropping database: ${dbName}...`);

    // Explicitly drop the database
    await mongoose.connection.db.dropDatabase();

    console.log(`✅ Database "${dbName}" deleted successfully`);
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error deleting database:", error);
    mongoose.connection.close();
  }
};

const express = require("express");
const router = express.Router();
const { getDevices, addDevice } = require("../controllers/deviceController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getDevices);
router.post("/add", authMiddleware, addDevice);

module.exports = router;

const express = require("express");
const router = express.Router();
const { addLog, getLogs } = require("../controllers/logController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:deviceId", authMiddleware, getLogs);
router.post("/add", authMiddleware, addLog);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getLimits, setLimits } = require("../controllers/limitController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:deviceId", authMiddleware, getLimits);
router.post("/set", authMiddleware, setLimits);

module.exports = router;

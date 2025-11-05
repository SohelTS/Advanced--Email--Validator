const express = require("express");
const router = express.Router();
const { validateMX, validateEmail, getHistory } = require("../controllers/validatorController");

router.post("/validate-mx", validateMX);
router.post("/validate-email", validateEmail);
router.get("/history", getHistory);

module.exports = router;

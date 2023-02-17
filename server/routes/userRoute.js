const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();


//registerUser function to fire whenever register endpoint is requested
router.post("/register", registerUser);

module.exports = router;

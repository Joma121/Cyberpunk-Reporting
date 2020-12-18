const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../models");

// Register - Get 
router.get("/register", (req, res) => {
    res.send("auth/register");
})

// Register - Post
router.post("/register", (req, res) => {
    try {
        return res.send("registered!");
    } catch (err) {
        return res.send(err);
    }
})

module.exports = router;
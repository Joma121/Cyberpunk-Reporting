const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../models");

// Register - Get 
router.get("/register", (req, res) => {
    res.send("auth/register");
});

// Register - Post
router.post("/register", (req, res) => {
    try {
        return res.send("registered!");
    } catch (err) {
        return res.send(err);
    }
});

// Login get
router.get("/login", (req, res) => {
    res.send("Login page");
});

// Verify - post
router.post("/login", (req, res) => {
    try {
        return res.send("Login requested");
    } catch (err) {
        return res.send(err);
    }
});



module.exports = router;
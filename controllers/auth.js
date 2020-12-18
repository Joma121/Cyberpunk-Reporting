const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../models");

// Register - Get 
router.get("/register", (req, res) => {
    res.send("auth/register");
});

// Register - Post
router.post("/register", async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });
        if (foundUser) return res.redirect("/login");
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash;
        const newUser = await db.User.create(req.body);


        return res.redirect("/login");
    } catch (err) {
        return res.send(err);
    }
});

// Login get
router.get("/login", (req, res) => {
    res.send("Login page");
});

// Verify - post
router.post("/login", async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });
        if(!foundUser) return res.render("auth/login", {message: "Account Not Found. Please register."});

        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if(!match)  return res.render("auth/login", {message:"Password or Email invalid."});

        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        }

        return res.redirect("/");
    } catch (err) {
        return res.send(err);
    }
});

// logout
router.delete("/logout", async (req, res) => {
    await req.session.destroy();
    res.redirect("/");
})

module.exports = router;
/* require express */
const express = require('express');
/* create router */
const router = express.Router();
/* Internal Modules */
const db = require("../models");

/* Routes */
// Index
router.get("/", async (req, res) => {
    try {
        return res.send("Main User Page loading");
    } catch (err) {
        return res.send(err);
    }
});

// New - will be covered by auth register

// Show
router.get("/:id", async (req, res) => {
    try {
        return res.send("User Profile page");
    } catch (err) {
        return res.send(err);
    }
});

// Create - will be covered by auth 

// Edit
router.get("/:id/edit", async (req, res) => {
    try {
        return res.send("Edit User Profile");
    } catch (err) {
        return res.send(err);        
    }
})

module.exports = router;
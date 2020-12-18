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
        return res.send("Main Reports Page loading");
    } catch (err) {
        return res.send(err);
    }
});

// New
router.get("/new", async (req, res) => {
    try {
        return res.send("New reports page loading");
    } catch (err) {
        return res.send(err);
    }
})

// Show
router.get("/:id", async (req, res) => {
    try {
        return res.send("Report show page loading")
    } catch (err) {
        return res.send(err);
    }
})


module.exports = router;
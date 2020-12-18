/* require express */
const express = require('express');
const authRequired = require('../middleware/authRequired');
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

// Edit
router.get("/:id/edit", authRequired, async (req, res) => {
    try {
        return res.send("Edit Report page loading")
    } catch (err) {
        return res.send(err);
    }
})

// Update
router.put("/:id", authRequired, async (req, res) => {
    try {
        return res.send();
    } catch (err) {
        return res.send(err);
    }
})

// Delete
router.delete("/:id", authRequired, async (req, res) => {
    try {
        return res.send();
    } catch (err) {
        return res.send(err);
    }
})

module.exports = router;
/* require express */
const express = require('express');
/* create router */
const router = express.Router();
/* Internal Modules */
const db = require("../models");

/* Routes */
router.get("/", async (req, res) => {
    try {
        return res.send("Main User Page loading");
    } catch (err) {
        return res.send(err);
    }
})

module.exports = router;
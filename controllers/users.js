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
        const allUsers = await db.User.find();
        const context = {users: allUsers};

        return res.render("users/view-users", context);
    } catch (err) {
        return res.send(err);
    }
});

// New - will be covered by auth register

// Edit
router.get("/settings", authRequired, async (req, res) => {
    try {
        if (req.body.password === "") {
            req.body.password = user.password;
        } 
        const foundUser = await db.User.findById(req.session.currentUser.id);
        const context = { user: foundUser };

        return res.render("users/accountSettings", context);
    } catch (err) {
        return res.send(err);        
    }
});

// Show
router.get("/:id", async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.params.id).populate("reports");
        const context = {user: foundUser};

        return res.render("users/usersProfile", context);
    } catch (err) {
        return res.send(err);
    }
});

// Create - covered by auth register

// Update
router.put("/:id", authRequired, async (req, res) => {
    try {

        const updatedUser = await db.User.findByIdAndUpdate(
            req.session.currentUser.id,
            {
                $set: {
                    ...req.body
                }
            },
            {new: true},
        )
        return res.redirect(`/users/${updatedUser._id}`);
    } catch (err) {
        return res.send(err);
    }
});

// Delete
router.delete("/:id", authRequired, async (req, res) => {
    try {
        const deletedUser = await db.User.findByIdAndDelete(req.params.id);
        await db.Report.remove({createdBy: deletedUser._id});
        return res.redirect("/");
    } catch (err) {
        return res.send(err);
    }
});

module.exports = router;
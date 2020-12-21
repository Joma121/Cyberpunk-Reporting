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
        const allReports = await db.Report.find();
        const context = {reports: allReports};
        
        return res.render("reports/index", context);
        // return res.send("Main Reports Page loading");
    } catch (err) {
        return res.send(err);
    }
});

// New
router.get("/new", async (req, res) => {
    try {
        // return res.render("reports/new");
        return res.send("New reports page loading");
    } catch (err) {
        return res.send(err);
    }
});

// Show
router.get("/:id", async (req, res) => {
    try {
        const foundReport = await db.Report.findById(req.params.id).populate("user");
        const context = {report: foundReport};
        return res.render("reports/show", context)
        // return res.send("Report show page loading");
    } catch (err) {
        return res.send(err);
    }
});

// Create 
router.post("/", async (req, res) => {
    try {
        req.body.createdBy = req.session.currentUser.id;
        const newReport = await db.Report.create(req.body)
        const reportCreator = await db.User.findById(req.session.currentUser.id);
        reportCreator.reports.push(newReport);
        reportCreator.save();
        return res.redirect(`/users/${req.session.currentUser.id}`)
    } catch (err) {
        return res.send(err);
    }
});

// Edit
router.get("/:id/edit", authRequired, async (req, res) => {
    try {
        const foundReport = await db.Report.findById(req.params.id).exec((err, foundReport) => {
            if (foundReport.createdBy != req.session.currentUser.id){ 
                console.log(foundReport);
                return res.redirect(`/reports/${foundReport._id}`);
            };
        });
        const context = {report: foundReport};
        // res.render(`reports/edit`, context);
        return res.send("Edit Report page loading");
    } catch (err) {
        return res.send(err);
    }
});

// Update
router.put("/:id", authRequired, async (req, res) => {
    try {
        const updatedReport = await db.Report.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    ...req.body,
                },
            },
            {
                new: true,
                runValidators: true
            },
        )
        console.log(updatedReport);
        return res.redirect(`/reports/${foundReport._id}`);
    } catch (err) {
        return res.send(err);
    }
});

// Delete
router.delete("/:id", authRequired, async (req, res) => {
    try {
        const deletedReport = await db.Report.findByIdAndDelete(req.params.id)
        .exec(async (err, deletedReport) => {
            const reportCreator = await db.User.findById(deletedReport.createdBy);
            reportCreator.reports.remove(deletedReport);
            reportCreator.save();
            console.log(reportCreator);
            console.log(deletedReport);
        })
        return res.redirect("/");
    } catch (err) {
        return res.send(err);
    }
});

module.exports = router;
/* Require Mongoose */
const mongoose = require("mongoose");

/* Set up Report Schema */
const reportSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        category: {type: String, required: true},
        severity: {type: String, required: true},
        actualOutcome: {type: String, required: true},
        expectedOutcome: {type: String, required: true},
        description: {type: String, required: true},
        occuranceDT: Date,
        frequency: {type: String, default: "0-1 times"},
        system: {
            sysType: {type: String, required: true},
            gfxCard: {type: String, default: ""},
            os: {type: String, default: ""},
            cpu: {type: String, default: ""},
            required: true
        },
        anonymous: {type: Boolean, default: false},
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        imageLinks: [String],
    },
    {
        timestamps: true,  
    }
);

/* Create model with reportSchema */
const Report = mongoose.model("Report", reportSchema);

/* Export */
module.exports = Report;
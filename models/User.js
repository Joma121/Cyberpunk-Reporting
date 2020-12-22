/* Require Mongoose */
const mongoose = require("mongoose");

/* Set up User Schema */
const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true, minlength: 4, maxlength: 15 },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minlength: 6 },
        reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
        location: String,
        profileImg: String,
        blurb: String,
    },
    {
        timestamps: true,  
    }
);

/* Create model with userSchema */
const User = mongoose.model("User", userSchema);

/* Export */
module.exports = User;
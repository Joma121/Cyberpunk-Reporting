/* Require Mongoose */
const mongoose = require("mongoose");

/* connection string */
const dbUrl = "mongodb://localhost:27017/cpReporting"

/* Connect */
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
})
.then(() => {
    console.log("Mongodb connected.")
})
.catch((err) => {
    console.war("Mongodb connection error.\n", err);
});

mongoose.connection.on("disconnect", () => { 
    console.log("Mongodb Disconnected...");
});


module.exports = {
    User: require("./User"),
    Report: require("./Report")
}
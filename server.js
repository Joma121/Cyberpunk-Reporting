/* ==== External Modules  ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules  ==== */
const controllers = require("./controllers");

/* ==== Instanced Modules  ==== */
const app = express();

/* ==== Configuration  ==== */
const PORT = 4005;

app.set("view engine", "ejs");

/* ==== Middleware ==== */
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ 
    extended: true
}));
app.use(methodOverride("_method"));

/* ==== Routes/Controllers  ==== */
//Home Routes
app.get("/", function(req, res) {
    res.render("home");
});

// Movies Controller
app.use("/home", controllers.index);


/* ==== Server Listener  ==== */
app.listen(PORT, function() {
    console.log(`CyberPunk 2077 Reporting is live at http://localhost:${PORT}/`);
});
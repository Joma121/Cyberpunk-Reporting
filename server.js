/* === External Modules === */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

/* === Internal Modules === */
const controllers = require("./controllers");

/* === Instanced Modules === */
const app = express();

/* === Configuration === */
const PORT = 4000;

app.set("view engine", "ejs");

/* === Middleware === */
app.use(express.static(__dirname + '/public'));
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method-override middleware
app.use(methodOverride("_method"));

// Session
app.use(
    session(
        {
            store: new MongoStore({
                url: "mongodb://localhost:27017/cpReporting"
            }),
            secret: "Know Your Enemy",
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7
            }
        }
    )
);

// Logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
    console.log(req.session);
    next();
});

// User Authentication middleware
app.use((req, res, next) => {
    app.locals.user = req.session.currentUser;
    next();
});

// const authRequired = require("./middleware/authRequired");

/* === Routes/Controllers === */
// Home Routes
app.get("/", (req, res) => {
    res.redirect("reports/");
});

// Auth controller
app.use("/", controllers.auth);

// User controller
app.use("/users", controllers.users);

// Report controller
app.use("/reports", controllers.reports);

/* === Server Listener === */
app.listen(PORT, () => {
    console.log(`Cyberpunk Reports is live at http://localhost:${PORT}/`);
})

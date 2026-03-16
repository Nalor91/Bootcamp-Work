//import dependencies
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const {requireAuth, checkUser} = require("./middleware/authMiddleware");
const connectDB = require("./db");

const app = express();

//middleware

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


//set view engine
app.set("view engine", "ejs");

//connect to MongoDB
async function startServer() {
    await connectDB();
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
startServer();

//routes
app.get("/", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get('/doggos', requireAuth, (req, res) => res.render('doggos'));
app.get('/adopted', requireAuth, (req, res) => res.render('adopted'));
app.get('/listed', requireAuth, (req, res) => res.render('listed'));
app.get('/register', requireAuth, (req, res) => res.render('register'));
app.use(authRoutes);

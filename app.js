
require("dotenv").config();
require("./db");



const express = require("express");
const app = express();




const { getSports } = require('./api/dbData.json');



require("./config")(app);


// 👇 Start handling routes here
const sportsRoutes = require('./routes/sports.routes');
app.use('/api', sportsRoutes);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes)







// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

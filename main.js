const express = require("express");
const { config } = require("dotenv");
config();
const morgan = require("morgan");
const connect_db = require("./config/db_config");
const authRoute = require("./routes/auth");
const { errorHandler } = require("./middleware/error_hadler");
connect_db("mongodb://localhost:27017/blog_me");
const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users/", authRoute);
const port = process.env.PORT || 5000;

app.use(errorHandler);
app.listen(port);
console.log(`app listening on ${port}`);

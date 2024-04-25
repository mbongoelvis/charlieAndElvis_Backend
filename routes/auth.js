const { Router } = require("express");
const { createUser, signInUser } = require("../controllers/users");
const authRoute = Router();

authRoute.post("/create", createUser);
authRoute.post("/login", signInUser);

module.exports = authRoute;

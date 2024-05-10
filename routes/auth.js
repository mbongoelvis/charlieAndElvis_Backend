const { Router } = require("express");
const userController = require("../controllers/users");
const authRoute = Router();
authRoute.post("/create", userController.createUser);
authRoute.post("/login", userController.signInUser);

module.exports = authRoute;

const Router = require('express').Router();
const UserController = require('../controllers/UserController');

authRouter.post("/signUp", UserController.signup);
authRouter.post("/login", UserController.login);
authRouter.get("/logout", UserController.logout);

module.exports = authRouter;

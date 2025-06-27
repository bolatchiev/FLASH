const userRouter = require('express').Router();
const UserController = require('../controllers/User.controller');

userRouter.post("/register", UserController.signup);
userRouter.get("/login", UserController.login);

module.exports = userRouter;

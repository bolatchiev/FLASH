const userRouter = require('express').Router();
const UserController = require('../controllers/UserController');

userRouter.post("/register", UserController.signup);
userRouter.post("/login", UserController.login);

module.exports = userRouter;

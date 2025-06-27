const Router = require('express').Router();
const userController = require('../controllers/UserController');

userRouter.post("/signUp", UserController.signup);
userRouter.post("/login", UserController.login);
userRouter.get("/logout", UserController.logout);

module.exports = authRouter;

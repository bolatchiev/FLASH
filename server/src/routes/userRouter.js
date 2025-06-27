const userRouter = require('express').Router();
const UserController = require('../controllers/UserController');

userRouter.post("/signUp", UserController.signup);
userRouter.post("/login", UserController.login);
userRouter.get("/logout", UserController.logout);

module.exports = userRouter;

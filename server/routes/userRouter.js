const express = require("express");
const { login, signup, loginWithCookie } = require("../controllers/userController");
const { authController } = require("../controllers/authController");
const userRouter = express.Router();

userRouter.post('/login', login)
userRouter.post('/signup', signup)

// login with Cookie
userRouter.get('/login', authController, loginWithCookie)

module.exports = userRouter;

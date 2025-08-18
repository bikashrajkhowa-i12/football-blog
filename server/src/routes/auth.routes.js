const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/index");
const validate = require("../middlewares/validators/index");

// Login
router.route("/login").post(validate.login, authController.login);

// Signup
router.route("/signup").post(validate.signup, authController.signup);

// Google
router.route("/google").post(authController.googleAuth);

module.exports = router;

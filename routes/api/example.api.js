const express = require("express");
const router = express.Router();

//CONTROLLER
const controller = require("../../controllers/example.controller");

// @route   GET api/example
// @desc    Print "hello"
// @access  Public
router.get("/", controller.hello);

module.exports = router;

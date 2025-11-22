const express = require("express");

const apiController = require("../controller/apiController");

const router = express.Router();

router.route("/self").get(apiController.self);

module.exports = router;

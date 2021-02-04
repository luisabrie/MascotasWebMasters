var express = require("express");
var router = express.Router();

const planController = require("../controllers/plan.controller.js");

router.get("/all", planController.findAll);

module.exports = router;

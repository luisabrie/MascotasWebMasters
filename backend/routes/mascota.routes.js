var express = require('express');
var router = express.Router();

const mascotaController = require("../controllers/mascota.controller.js");

router.get('/', mascotaController.findAll);


module.exports = router;

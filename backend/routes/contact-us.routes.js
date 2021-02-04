var express = require("express");
var router = express.Router();

const contactController = require("../controllers/contact-us.controller.js");

router.post("/send", contactController.sendMail);
//router.post('/addusuario',  usuarioController.create);

module.exports = router;

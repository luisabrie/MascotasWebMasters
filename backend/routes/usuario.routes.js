var express = require('express');
var router = express.Router();

const usuarioController = require("../controllers/usuario.controller.js");

router.get('/', usuarioController.findAll);
router.post('/addusuario',  usuarioController.create);


module.exports = router;


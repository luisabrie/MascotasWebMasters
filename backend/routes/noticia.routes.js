var express = require('express');
var router = express.Router();

const noticiaController = require("../controllers/noticia.controller.js");

router.get('/', noticiaController.findAll);
//router.post('/addusuario',  usuarioController.create);


module.exports = router;

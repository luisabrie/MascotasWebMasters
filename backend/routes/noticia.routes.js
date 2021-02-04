var express = require('express');
var router = express.Router();

const noticiaController = require("../controllers/noticia.controller.js");
const { route } = require('./mascota.routes.js');

router.get('/', noticiaController.findAll);
router.post('/save_noticia',  noticiaController.create);
router.get('/:titulo', noticiaController.buscarPorTitulo)

module.exports = router;

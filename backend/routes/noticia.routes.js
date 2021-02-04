var express = require('express');
var router = express.Router();

const noticiaController = require("../controllers/noticia.controller.js");
const { route } = require('./mascota.routes.js');

router.get('/', noticiaController.findAll);
router.post('/save_noticia',  noticiaController.create);
router.get('/:titulo', noticiaController.buscarPorTitulo)

router.delete('/delete_noticia/:id',  direccionController.delete);
//router.put('/update_noticia',  direccionController.update);

module.exports = router;

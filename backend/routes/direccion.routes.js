var express = require('express');
var router = express.Router();

const direccionController = require("../controllers/direccion.controller.js");

router.get('/', direccionController.findAll);
router.post('/adddireccion',  direccionController.create);
router.delete('/deletedireccion/:id',  direccionController.delete);
router.put('/updatedireccion',  direccionController.update);


module.exports = router;

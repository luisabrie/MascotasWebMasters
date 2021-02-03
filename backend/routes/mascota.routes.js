var express = require('express');
var router = express.Router();

const mascotaController = require("../controllers/mascota.controller.js");

router.get('/', mascotaController.findAll);
router.post('/addmascota',  mascotaController.create);
router.delete('/deletemascota/:id',  mascotaController.delete);
router.put('/updatemascota',  mascotaController.update);


module.exports = router;

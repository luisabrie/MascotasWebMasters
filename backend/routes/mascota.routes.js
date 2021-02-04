var express = require('express');
var router = express.Router();

const mascotaController = require("../controllers/mascota.controller.js");

router.get('/', mascotaController.findAll);
router.post('/addmascota',  mascotaController.create);
router.delete('/deletemascota/:id',  mascotaController.delete);
router.put('/updatemascota',  mascotaController.update);

router.get('/usuario/:id', mascotaController.findbyUser);


router.get('/anuncios', mascotaController.getAnuncios);
router.get('/peticiones', mascotaController.getPeticiones);
router.get('/peticion/verificacion/:id', mascotaController.verifybyId);
router.get('/publicacion/:id', mascotaController.findPeticionbyId);

router.get('/peticiones/verificacion/pago/:id', mascotaController.findPagoOfAnunciobyId);

router.get('/peticiones/verificacion/usuario/:id', mascotaController.findAnunciosbyUserId);


router.post('/peticiones/verificacion/pago', mascotaController.updatePagoStatus);

router.get('/tipo', mascotaController.findbyTipo);

router.get('/estado', mascotaController.findbyEstado);


module.exports = router;

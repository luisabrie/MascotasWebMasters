var express = require('express');
var router = express.Router();

const adminController = require("../controllers/admin.controller.js");

router.get('/reportes', adminController.showViewReportes);
router.get('/pagos', adminController.showViewPagos);
router.get('/peticiones', adminController.showViewPeticiones);

module.exports = router;
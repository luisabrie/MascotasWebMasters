const { usuario } = require("../models");
const db = require("../models");

exports.showViewReportes = (req, res) => {
  res.render('reportes')
};

exports.showViewPagos = (req, res) => {
  res.render('pagos')
};

exports.showViewPeticiones = (req, res) => {
  res.render('peticiones')
};




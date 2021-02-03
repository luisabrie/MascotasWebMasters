const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Create and Save Usuario
exports.create = (req, res) => {
  if (!req.body.nombre || !req.body.apellido || !req.body.correo) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  };

  // Create a Tutorial
  const usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    password: req.body.password,
  };

  // Save Tutorial in the database
  Usuario.create(usuario)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the maestros."
      });
  });
};




// Retrieve all Usuario from the database.
exports.findAll = (req, res) => {
    Usuario.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
};



// Update Usuario
exports.update = (req, res) => {

  
};

// Delete Usuario
exports.delete = (req, res) => {

};



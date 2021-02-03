const db = require("../models");
const Direccion = db.direccion;
const Op = db.Sequelize.Op;

// Create and Save Usuario
exports.create = (req, res) => {
  if (!req.body.calle_principal || !req.body.calle_secundario) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  };

  // Create a Tutorial
  const direccion = {
    calle_principal: req.body.calle_principal,
    calle_secundario: req.body.calle_secundario,
    numero: req.body.numero,
    referencia: req.body.referencia,
  };

  // Save Tutorial in the database
  Direccion.create(direccion)
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
    Direccion.findAll()
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



// Update Direccion
exports.update = (req, res) => {
    datos = req.body
    Direccion.update(
      {
        calle_principal: datos['calle_principal'],
        calle_secundario: datos['calle_secundario'],
        numero: datos['numero'],
        referencia: datos['referencia']
      }, 
      {
        where: {
          id: datos['id']
        }
      })
      .then(data => {
        res.send(data)
  
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        });
      });
  
  
    
  };

// Delete Direccion
exports.delete = (req, res) => {
    if (!req.params.id) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
    }
    const id = req.params.id;
    Direccion.destroy({
      where: {
        id: id
      }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Direccion eliminada con exito"
            });
        } else {
            res.send({
                message: `Error al eliminar la direccion con id ${id}, tal vez no exista`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la direccion con id: " + id
        });
    });
  
};
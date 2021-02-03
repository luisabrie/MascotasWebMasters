const db = require("../models");
const Mascota= db.mascota;
const Op = db.Sequelize.Op;

// Create and Save Mascota
exports.create = (req, res) => {
  if (!req.body.nombre || !req.body.descripcion || !req.body.tipo) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
}

// Create a Tutorial
const mascota = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    tipo: req.body.tipo,
    verificacion: 0,
    color: req.body.color,
    raza: req.body.raza
};

// Save Tutorial in the database
Mascota.create(mascota)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the maestros."
        });
    });
    
};

// Retrieve all Maestros from the database.
exports.findAll = (req, res) => {
  Mascota.findAll()
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



// Update Mascota
exports.update = (req, res) => {
  datos = req.body
  Mascota.update(
    {
      nombre: datos['nombre'],
      descripcion: datos['descripcion'],
      color: datos['color'],
      raza: datos['raza']
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

// Delete Mascota
exports.delete = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  }
  Mascota.destroy({
    where: {
      id: req.params.id
    }
  })

};



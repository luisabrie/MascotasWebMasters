const db = require("../models");
const Mascota= db.mascota;
const Op = db.Sequelize.Op;

// Create and Save Mascota
exports.create = (req, res) => {
    
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

  
};

// Delete Mascota
exports.delete = (req, res) => {

};



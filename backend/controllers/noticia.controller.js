const db = require("../models");
const Noticia = db.noticia;
const Op = db.Sequelize.Op;


// Retrieve all Usuario from the database.
exports.findAll = (req, res) => {
    Noticia.findAll()
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving noticias."
      });
    });
};



// Update Usuario
exports.update = (req, res) => {

  
};

// Delete Usuario
exports.delete = (req, res) => {

};

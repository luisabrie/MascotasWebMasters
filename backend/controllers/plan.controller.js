const db = require("../models");
const Plan = db.plan;
const Op = db.Sequelize.Op;

// Retrieve all Usuario from the database.
exports.findAll = (req, res) => {
  Plan.findAll({
    attributes: [
      "id",
      "nombre",
      "precio",
      "duracion",
      "personaRangoMenor",
      "personaRangoMayor",
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving planes.",
      });
    });
};

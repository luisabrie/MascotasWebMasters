const db = require("../models");
const User = db.usuario;

checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    where: {
      correo: req.body.correo,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Ese correo ya esta en uso",
      });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkExistingEmail: checkDuplicateEmail,
};
module.exports = verifySignUp;

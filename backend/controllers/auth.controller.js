const db = require("../models");
const config = require("../config/auth.config");
const Usuario = db.usuario;
const Tipo = db.tipo;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  Usuario.create({
    correo: req.body.correo,
    password: bcrypt.hashSync(req.body.password, 8),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  })
    .then((user) => {
      user.setTipos([1]).then(() => {
        res.send({
          message: "El usuario ha sido registrado satisfactoriamente",
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  Usuario.findOne({
    where: {
      correo: req.body.correo,
    },
  })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ message: "No se ha encontrado el usuario." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña invalida!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 60, // 24 hours
      });

      var authorities = [];
      user.getTipos().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          correo: user.correo,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

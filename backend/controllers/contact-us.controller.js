const db = require("../models");
const app = require("../app");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "backend.volveracasa@hotmail.com",
    pass: "enviarcorreosisi321",
  },
});

// Retrieve all Usuario from the database.
exports.sendMail = (req, res) => {
  console.log(req);

  let mailOptions = {
    from: "'Volver a Casa ' <backend.volveracasa@hotmail.com>",
    to: "luis.abrie@gmail.com",
    subject: "Un nuevo contacto en el formulario",
    text:
      "Te han dejado esta informacion en el sitio." + JSON.stringify(req.body),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.sendStatus(200);
  });
};

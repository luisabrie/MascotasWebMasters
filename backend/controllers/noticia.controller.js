const { comentario } = require("../models");
const db = require("../models");
const Noticia = db.noticia;
const Comentario = db.comentario;
const Usuario = db.usuario;

const Op = db.Sequelize.Op;


// Retrieve all Noticias from the database.
exports.findAll = (req, res) => {
    Noticia.findAll({
      where:{
      },
      include: [Comentario,Usuario]
    }
      
    )
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

exports.buscarPorTitulo = (req, res) => {
  Noticia.findAll({
    where:{
      titulo: req.params.titulo
    },
    include: [Comentario,Usuario]
  }
  )
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



exports.create = (req, res) => {
  if (!req.body.titulo || !req.body.noticia) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
}

// Crea una Noticia
const noticia = {
    titulo: req.body.titulo,
    noticia: req.body.noticia,
    
};

Mascota.create(noticia)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the maestros."
        });
    });
    
};

// Update Noticia
exports.update = (req, res) => {
  datos = req.body
  Noticia.update(
    {
      titulo: datos['titulo'],
      noticia: datos['noticia']
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

// Delete Noticia
exports.delete = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  }
  Noticia.destroy({
    where: {
      id: req.params.id
    }
  })

};

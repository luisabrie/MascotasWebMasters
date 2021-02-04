const { usuario } = require("../models");
const db = require("../models");
const Mascota= db.mascota;
const Op = db.Sequelize.Op;
const Anuncio= db.anuncio;
const Usuario= db.usuario;
exports.showViewReportes = (req, res) => {
  res.render('reportes')
};

exports.showViewPagos = (req, res) => {
  res.render('pagos')
};
/*
exports.showViewPeticiones = (req, res) => {
  res.render('peticiones')
};
*/

//devuelve todos los anuncios
exports.showViewPeticiones = (req, res) => {
  Anuncio.findAll({
    where:{},
    include: [
      {
        model: Mascota,
        include: [Usuario]
      }
    ]
  }

  )
    .then(data => {
      let datos = []
      for(elem of data){
        let item = {
          fecha_ingreso: null,
          verificacion: null,
          nombreMascota: null,
          nombreCompleto: null,
        }
        item.fecha_ingreso = elem.fecha_ingreso
        if(!elem.mascotum.verificacion){
          item.verificacion = 'Aprobado'
        }else{
          item.verificacion = 'Pendiente'
        }
        
        item.nombreMascota = elem.mascotum.nombre
        item.nombreCompleto = elem.mascotum.usuarioId.nombre + ' ' + elem.mascotum.usuarioId.apellido
        datos.push(item)
      }
      res.render('peticiones', {datos: datos});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
};




const { usuario } = require("../models");
const db = require("../models");
const Mascota= db.mascota;
const Op = db.Sequelize.Op;
const Anuncio= db.anuncio;
const Usuario= db.usuario;
const EstadoMascota= db.estadoMascota;
const Direccion = db.direccion;
const Ubicacion = db.ubicacion;
const Pago = db.pago;
const MedioPago = db.mediopago;


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


//devuelve anuncios que aun no han sido aprobados
exports.getPeticiones = (req, res) => {
  Anuncio.findAll({
    where:{
      fecha_inicio: null,
    },
    include: [
      {
        model: Mascota,
        include: [Usuario]
      }
    ]
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

//devuelve mascotas por id de usuario
exports.findbyUser = (req, res) => {
  Mascota.findAll({
    where:{
      usuarioId: req.params.id
    },
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


//devuelve datos de mascota, usuario y ubicacion de un anuncio 
exports.findPeticionbyId = (req, res) => {
  Anuncio.findAll({
    where:{
      id: req.params.id
    },
    include: [
      {
        model: Mascota,
        include: [Usuario,Ubicacion]
      }
    ]
  }).then(data=>{
    res.send(data)
  })
};


//devuelve datos de pago de un anuncio por idAnuncio
exports.findPagoOfAnunciobyId = (req, res) => {
  Anuncio.findAll({
    where:{
      id: req.params.id
    },
    include: [
      {
        model: Pago,
        include: [MedioPago]
      }
    ]
  }).then(data=>{
    res.send(data)
  })
};


//devuelve anuncios de las mascotas de un usuario especifico con idUsuario
exports.findAnunciosbyUserId = (req, res) => {
  Usuario.findAll({
    where:{
      id: req.params.id
    },
    include: [
      {
        model: Mascota,
        include: [Anuncio]
      }
    ]
  }).then(data=>{
    res.send(data)
  })
};


//devuelve una peticion/anuncio para realizar la verificacion
exports.verifybyId = (req, res) => {
  Anuncio.findAll({
    where:{
      id: req.params.id
    },
    include: [
      {
        model: Mascota,
        include: [Usuario, Ubicacion]
      }
    ]
  }).then(data=>{
    res.send(data)
  })
};


exports.updatePagoStatus = (req, res) => {
  Anuncio.findAll({
    where:{
      id: req.body.id
    },
    include: [Pago]
  })
  .then(data=>{
    console.log(data[0].pagos[0].id)
    Pago.update(
      {
        fecha_pago: req.body.fecha_pago,
        numero_confirmacion: req.body.numero_confirmacion,
        fecha_autorizacion: req.body.fecha_autorizacion
      }, 
      {
      where: {
        id: data[0].pagos[0].id
      }
    })
    .then(data => {
      res.send(data)
    })
    }
    )
};

//devuelve todas las mascotas con sus estados y sus tipos
exports.findbyTipo = (req, res) => {
  EstadoMascota.findAll({
    where:{
    },
    include: [Mascota]
  }
  )
    .then(data => {
      let datos = [

        {
          label: "Perro",
          value: 0,
        },
        {
          label: "Gato",
          value: 0,
        },
        {
          label: "Otro",
          value: 0,
        },


      ]
      for(elem of data){
        console.log(data)
        if(elem.mascotum.tipo =='Perro'){
          datos[0].value = datos[0].value +1
        }
        if(elem.estado =='Gato'){
          datos[1].value = datos[1].value +1
        }
        if(elem.estado =='Otro'){
          datos[1].value = datos[2].value +1
        }
      }
      res.send(datos);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
};
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mascota = require("./mascota.model.js")(sequelize, Sequelize);

db.estadoMascota = require("./estadoMascota.model.js")(sequelize, Sequelize);
db.anuncio = require("./anuncio.model.js")(sequelize, Sequelize);
db.ubicacionAnuncio = require("./ubicacionAnuncio.model.js")(sequelize, Sequelize);
db.direccion = require("./direccion.model.js")(sequelize, Sequelize);
db.ubicacion = require("./ubicacion.model.js")(sequelize, Sequelize);

db.mascota.hasOne(db.estadoMascota);
db.estadoMascota.belongsTo(db.mascota);

db.mascota.hasMany(db.anuncio);
db.anuncio.belongsTo(db.mascota);

db.mascota.hasMany(db.ubicacion);
db.ubicacion.belongsTo(db.mascota);

db.anuncio.hasMany(db.ubicacionAnuncio);
db.ubicacionAnuncio.belongsTo(db.anuncio);

db.ubicacion.hasMany(db.ubicacionAnuncio);
db.ubicacionAnuncio.belongsTo(db.ubicacion);

db.ubicacion.hasOne(db.direccion);
db.direccion.belongsTo(db.ubicacion);

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.telefono = require("./telefono.model.js")(sequelize, Sequelize);
db.noticia = require("./noticia.model.js")(sequelize, Sequelize);
db.comentario = require("./comentario.model.js")(sequelize, Sequelize);
db.direccion = require("./direccion.model.js")(sequelize, Sequelize);

db.canton = require("./canton.model.js")(sequelize, Sequelize);
db.provincia = require("./provincia.model.js")(sequelize, Sequelize);
db.region = require("./region.model.js")(sequelize, Sequelize);

db.pago = require("./pago.model.js")(sequelize, Sequelize);
db.mediopago = require("./medioPago.model.js")(sequelize, Sequelize);

db.plan = require("./plan.model.js")(sequelize, Sequelize);
db.redes = require("./redes.model.js")(sequelize, Sequelize);
db.redesPlan = require("./redesPlan.model.js")(sequelize, Sequelize);

db.anuncio.hasMany(db.pago);
db.anuncio.hasOne(db.plan);
db.usuario.hasMany(db.telefono);
db.telefono.belongsTo(db.usuario);

db.usuario.hasMany(db.noticia);
db.noticia.belongsTo(db.usuario);

db.usuario.hasMany(db.comentario);
db.noticia.hasMany(db.comentario);
db.comentario.belongsTo(db.usuario);
db.comentario.belongsTo(db.noticia);

//db.direccion.hasMany(db.usuario);
//db.usuario.belongsTo(db.direccion);

db.canton.hasMany(db.direccion);
db.direccion.belongsTo(db.canton);

db.provincia.hasMany(db.canton);
db.canton.belongsTo(db.provincia);

db.region.hasMany(db.provincia);
db.provincia.belongsTo(db.region);

db.mediopago.hasMany(db.pago);
db.pago.belongsTo(db.mediopago);

db.plan.hasMany(db.redesPlan);
db.redesPlan.belongsTo(db.plan);

db.redes.hasMany(db.redesPlan);
db.redesPlan.belongsTo(db.redes)

module.exports = db;
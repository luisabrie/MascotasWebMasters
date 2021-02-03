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


module.exports = db;
module.exports = (sequelize, DataTypes) => {
  const Mascota = sequelize.define("mascota", {
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    },
    tipo: {
      type: DataTypes.STRING
    },
    raza: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    verificacion: {
      type: DataTypes.BOOLEAN
    },
  

  });

  return Mascota;
};
module.exports = (sequelize, DataTypes) => {
  const EstadoMascota = sequelize.define("estadoMascota", {
    fecha_estado: {
      type: DataTypes.DATE
    },
    estado: {
      type: DataTypes.STRING
    }
  });

  return EstadoMascota;
};
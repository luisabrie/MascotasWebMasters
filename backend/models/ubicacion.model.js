module.exports = (sequelize, DataTypes) => {
    const Ubicacion = sequelize.define("ubicacion", {
      latitud: {
        type: DataTypes.FLOAT
      },
      longitud: {
        type: DataTypes.FLOAT
      },
      radioM: {
        type: DataTypes.INTEGER
      },
      precioTotal:{
        type: DataTypes.INTEGER
      },
      activa: {
        type: DataTypes.BOOLEAN

      }
  
  
    });
  
    return Ubicacion;
  };
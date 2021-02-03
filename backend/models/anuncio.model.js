module.exports = (sequelize, DataTypes) => {
    const Anuncio = sequelize.define("anuncio", {
      fecha_ingreso: {
        type: DataTypes.DATE
      },
      fecha_inicio: {
        type: DataTypes.DATE
      },
      fecha_fin: {
        type: DataTypes.DATE
      },
      precioTotal:{
        type: DataTypes.INTEGER
      }
  
  
    });
  
    return Anuncio;
  };
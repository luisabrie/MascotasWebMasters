module.exports = (sequelize, DataTypes) => {
    const Redes = sequelize.define("redes", {
      nombre: {
        type: DataTypes.STRING
      },
      
    });  
    return Redes;
  };
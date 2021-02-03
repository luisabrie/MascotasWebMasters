module.exports = (sequelize, DataTypes) => {
    const Direccion = sequelize.define("direccion", {
      calle_principal: {
        type: DataTypes.STRING
      },
      calle_secundaria: {
        type: DataTypes.STRING
      },
      referencia: {
        type: DataTypes.STRING
      },
      numero: {
        type: DataTypes.STRING
      },
  
  
    });
  
    return Direccion;
  };
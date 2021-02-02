module.exports = (sequelize, DataTypes) => {
    const MedioPago = sequelize.define("mediopago", {
      nombre: {
        type: DataTypes.STRING
      },
      
      
    });
  
    return MedioPago;
  };
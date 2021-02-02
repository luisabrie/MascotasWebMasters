module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define("pago", {
      nombre: {
        type: DataTypes.STRING
      },
      fecha_pago: {
          type: DataTypes.INTEGER
      },
      fecha_autorizacion: {
          type: DataTypes.INTEGER
      },
      fecha_verificacion: {
          type: DataTypes.INTEGER
      },
      numero_confirmacion:{
          type: DataTypes.INTEGER
      }


     
      
    });
  
    return Pago;
  };
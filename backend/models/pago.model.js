module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define("pago", {
      nombre: {
        type: DataTypes.STRING
      },
      fecha_pago: {
          type: DataTypes.DATE
      },
      fecha_autorizacion: {
          type: DataTypes.DATE
      },
      fecha_verificacion: {
          type: DataTypes.DATE
      },
      numero_confirmacion:{
          type: DataTypes.INTEGER
      }
    });
  
    return Pago;
  };
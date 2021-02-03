module.exports = (sequelize, DataTypes) => {
    const Telefono = sequelize.define("telefono", {
      tel: {
        type: DataTypes.INTEGER
      },
      
    });


    //Telefono.associate = models => {
      //  Telefono.belongsTo(models.Usuario, {
      //      foreignKey: {
                allowNull: false
     //       }
     //   })
    //}

  
    return Telefono;
  };
module.exports = (sequelize, DataTypes) => {
    const Provincia = sequelize.define("provincia", {

      nombre: {
        type: DataTypes.STRING
      },
      
    });

    return Provincia;
  };
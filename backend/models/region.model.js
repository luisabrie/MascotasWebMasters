module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("region", {

      nombre: {
        type: DataTypes.STRING
      },
      
    });

    return Region;
  };
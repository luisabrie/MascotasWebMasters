module.exports = (sequelize, DataTypes) => {
    const Canton = sequelize.define("canton", {
      nombre: {
        type: DataTypes.STRING
      },
      
      
    });

    return Canton;
  };
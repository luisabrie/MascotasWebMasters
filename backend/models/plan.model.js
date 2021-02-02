module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define("plan", {
      nombre: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.FLOAT
      },
      duracion: {
        type: DataTypes.INTEGER
      },
      estado: {
        type: DataTypes.INTEGER //definir el tipo tinyint(1)
      },
      personaRangoMenor: {
        type: DataTypes.INTEGER
      },
      personaRangoMayor: {
        type: DataTypes.INTEGER
      },
      
    });
    return Plan;
  };
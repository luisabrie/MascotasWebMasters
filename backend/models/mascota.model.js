module.exports = (sequelize, DataTypes) => {
  const Mascota = sequelize.define("mascota", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return Mascota;
};
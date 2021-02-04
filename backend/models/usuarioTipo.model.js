module.exports = (sequelize, Sequelize) => {
  const Tipo = sequelize.define("tipo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Tipo;
};

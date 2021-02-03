module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define("comentario", {
      comentario: {
        type: DataTypes.STRING
      },
      
      
    });


    return Comentario;
  };
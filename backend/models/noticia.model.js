module.exports = (sequelize, DataTypes) => {
    const Noticia = sequelize.define("noticia", {
        
        noticia: {
        type: DataTypes.STRING
      },

      titulo: {
        type: DataTypes.TEXT
      }
    });
  
    return Noticia;
  };
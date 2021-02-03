module.exports = (sequelize, DataTypes) => {
    const Noticia = sequelize.define("noticia", {
        
        noticia: {
        type: DataTypes.TEXT
      },

      titulo: {
        type: DataTypes.STRING
      }

      
    });
  
    return Noticia;
  };
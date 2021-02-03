module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("usuario", {
      nombre: {
        type: DataTypes.STRING
      },
      apellido: {
        type: DataTypes.STRING
      },
      correo: {
        type: DataTypes.STRING
      },
      
    });

    return Usuario;
  };
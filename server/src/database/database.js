import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("alimentos ", "postgres", "1234", {
  host: "localhost",
  logging: false, 
  dialect: "postgres",
});



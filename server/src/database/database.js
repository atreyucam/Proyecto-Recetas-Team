import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize(
  "recetasdb", //nombre de la base de datos
  "postgres",  //user
  "Nasa4036",   //password
{
  host: "localhost",
  logging: false,
  dialect: "postgres",
 
});



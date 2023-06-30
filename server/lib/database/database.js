import Sequelize from "sequelize";

// conexion a la base de datos

// Configura con tus credenciales propios
//export const sequelize = new Sequelize("alimentos", "postgres", "admin", {
//   host: "localhost",
//   logging: false,
//   dialect: "postgres",
//   port: 7537
// });

export const sequelize = new Sequelize("railway", "postgres", "Fmb3lTnosaU6An63am1C", {
  host: "containers-us-west-46.railway.app",
  logging: false,
  dialect: "postgres",
  port: 7537
});
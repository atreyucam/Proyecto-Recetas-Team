import express from "express";
import usuarioRautes from "./routes/usuarios.routes.js";
import recetaRoutes from "./routes/recetas.routes.js";
import cors from "cors";

const app = express();

// mideleware
app.use(express.json());

const whiteList = [
  "http://localhost:4200",
  "https://localhost:4200",
  "https://proyecto-recetas-team.vercel.app",
];
app.use(
  cors({
    credentials: true,
    origin: whiteList,
  })
);
// routes

app.use(usuarioRautes);
app.use(recetaRoutes);

export default app;

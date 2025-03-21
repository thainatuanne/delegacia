import express from "express";
import dotenv from "dotenv";

import { ArmaRoutes } from "./routes/arma.routes";
import { CrimeRoutes } from "./routes/crime.routes";
import { CriminosoRoutes } from "./routes/criminoso.routes";
import { EnderecoRoutes } from "./routes/endereco.routes";

dotenv.config();
const app = express();

app.use(express.json());

app.use(ArmaRoutes.bind());
app.use(CrimeRoutes.bind());
app.use(CriminosoRoutes.bind());
app.use(EnderecoRoutes.bind());

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`🚓 Servidor rodando na porta ${PORT}`);
});
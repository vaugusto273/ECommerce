import express from "express";
import {initDb} from "./db/schema.js";

import productsRoutes from "./routes/products.js"
import categoriesRoutes from "./routes/categories.js"

const app = express();
const PORT = 3000;

app.use(express.json());

initDb();

app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);

app.listen(PORT, () => {
    console.log(`O Servidor está rodando na porta ${PORT}`);
});

import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/products", (req, res) => {
	products.push(req.body);

    res.status(201).json(req.body);
});

app.get("/products", (req, res) => {
	res.status(200).res.json(products);
});

app.listen(PORT, () => {
    console.log(`O Servidor está rodando na porta ${PORT}`);
});

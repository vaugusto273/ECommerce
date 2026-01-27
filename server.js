import express from "express";

const app = express();
app.use(express.json());

app.post("/products", (req, res) => {
	products.push(req.body);

    res.status(201).json(req.body);
});

app.get("/products", (req, res) => {
	res.status(200).res.json(products);
});

app.listen(3000);

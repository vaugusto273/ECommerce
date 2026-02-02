import db from "../db/connection.js";

export function list(req, res) { 
    const returnAll = db.prepare('SELECT * FROM products')
    const products = returnAll.all();
    return res.status(200).json(products); 
}
export function getById(req, res) { 
    const { id } = req.params;
    const returnById = db.prepare('SELECT * FROM products WHERE id = ?');
    const product = returnById.get(Number(id));
    return res.status(200).json({product}); 
}
export function create(req, res) { 
    const { category_id, name, desc, image_url } = req.body;
    const stmt = db.prepare(`INSERT INTO products (category_id, name, desc, image_url) VALUES (?, ?, ?, ?)`);
    const create = stmt.run(category_id, name, desc, image_url);
    return res.status(201).json({
        id: create.lastInsertRowid,
        message: 201
    }); 
}
export function update(req, res) { return res.json({}); }
export function remove(req, res) { return res.status(204).send(); }
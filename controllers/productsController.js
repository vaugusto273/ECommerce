import db from "../db/connection.js";

export function list(req, res) { 
    const stmt = db.prepare('SELECT * FROM products')
    const getAll = stmt.all();
    return res.status(200).json(getAll); 
}
export function getById(req, res) { 
    const { id } = req.params;
    const stmt = db.prepare('SELECT * FROM products WHERE id = ?');
    const getById = stmt.get(Number(id));
    return res.status(200).json({getById}); 
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
export function update(req, res) { 
    const { id } = req.params;
    const { category_id, name, desc, image_url} = req.body;
    const stmt = db.prepare('UPDATE products SET category_id = ?, name = ?, desc = ?, image_url = ? WHERE id = ?');
    const update = stmt.run(category_id,name,desc,image_url,id)
    return res.status(200).json({
        id: update.changes,
        message: 200
    }); 
}
export function remove(req, res) { return res.status(204).send(); }
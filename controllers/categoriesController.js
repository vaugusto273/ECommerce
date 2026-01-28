export function list(req, res) { return res.json([]); }
export function getById(req, res) { return res.json({}); }
export function create(req, res) { return res.status(201).json({}); }
export function update(req, res) { return res.json({}); }
export function remove(req, res) { return res.status(204).send(); }

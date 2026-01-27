CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTOINCREMENT,
    category_id INT NOT NULL,
    name TEXT NOT NULL,
    desc TEXT,
    image_url TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id));

-- 1. UPDATE: Guhindura igiciro cy'igicuruzwa gifite id ya 1
UPDATE products SET price = 750.00 WHERE id = 1;

-- 2. DELETE: Gusiba igicuruzwa gifite id ya 10
DELETE FROM products WHERE id = 10;

-- 3. Complex SELECT: Shaka ibicuruzwa birengeje amadolari 20, bitondekanyije guhera ku bihenze, ugarure 5 gusa.
SELECT * FROM products 
WHERE price > 20 
ORDER BY price DESC 
LIMIT 5;
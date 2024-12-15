-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
  
SELECT first_name as fname, age
FROM Customers WHERE age > 30 ORDER BY age desc LIMIT 3;

-- get all the orders that are higher than 300$, by a descending order:
SELECT item, customer_id, amount FROM Orders WHERE amount > 300 ORDER BY amount DESC;

-- output how many shippings are in "Pending" status

SELECT COUNT(*) AS pending_orders 
FROM Shippings
WHERE status = 'Pending';

-- output how many pending orders i have for specific customer id
SELECT COUNT(*) AS pending_orders_for_specific_customer 
FROM Shippings
WHERE status = 'Pending' AND customer = 4;

-- how many un-delivered orders i have in the system
SELECT COUNT(*) AS uncompleted_orders 
FROM Shippings
WHERE status != 'Delivered';

-- give me all the orders of keyboard OR mouse
SELECT * FROM Orders
WHERE item = 'Keyboard' OR item = 'Mouse'
ORDER BY amount DESC;

-- give me all distinct countries i have customers in
SELECT DISTINCT country FROM Customers;

-- number of distinct (unique) countries i have customers:
SELECT Count(DISTINCT country) FROM Customers;

-- give me all customers that are from Spain and their name starts with 'B'
SELECT *
FROM Customers
WHERE country = 'UAE' AND first_name LIKE 'B%';

SELECT * FROM Customers
WHERE first_name NOT LIKE 'B%';

-- give me all the customers that are in USA or UK
SELECT * FROM Customers
WHERE country IN ('USA', 'UK');

-- give me all the customers that are not in USA and not in UK
SELECT * FROM Customers
WHERE country NOT IN ('USA', 'UK');

-- give me all the user_ids that did anything today (for example in UserActivity table
-- SELECT DISTINCT user_id FROM UserActivity WHERE activity_date = "15/12/2024"



-- INSERT
-- UPDATE
-- DELETE
-- TODO - QUERY TO CREATE AND ALTER TABLE
-- CREATE READ UPDATE DELETE
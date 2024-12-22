-- TOPICS HERE:
-- SQL aggregate functions V
-- DELETE V
-- UPDATE V
-- IN (Select...)
-- group by
-- Complex select queries
-- JOIN

-- aggregate functions:
-- bringing the sum of oredrs (in general and by user)
SELECT SUM(amount) FROM Orders;
SELECT SUM(amount) FROM Orders WHERE customer_id = 4;

-- bringing the min / max of the orders, and also by specific user:
SELECT MIN(amount) FROM Orders;
SELECT MIN(amount) FROM Orders WHERE customer_id = 4;

SELECT MAX(amount) FROM Orders;
SELECT MAX(amount) FROM Orders WHERE customer_id = 4;

-- bringing the average orders of specific user
SELECT AVG(amount) FROM Orders WHERE amount > 300;

SQL Injection attack:
GET http://localhost:3000/api/posts?results=5;DROP TABLE Users;, headers: { Authorization: 'Bearer <ACCESS-TOKEN>'}

const userId = req?.userData?.userId;
const posts = await client.query(`SELECT * FROM posts WHERE user_id=${userId} LIMIT ${results}`);
but actually will be like this:
const posts = await client.query(`SELECT * FROM posts WHERE user_id=${userId} LIMIT results=5;DROP TABLE Users;`);

-- DELETE:
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

-- DELETE the full table content (empty):
DELETE FROM table_name;

-- drop the table:
DROP TABLE Customers;

-- UPDATE:
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

-- UPDATE of course can update multiple rows:
UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';

-- Give me how many customers i have per country
SELECT Count(*), country
FROM Customers
GROUP BY country;

-- Give me an output that is saying for each user how much he ordered ($):
SELECT SUM(amount), customer_id FROM Orders
GROUP BY customer_id;

-- The following SQL statement lists the number of customers in each country, sorted high to low:
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

-- give me the sum of orders per customer, when the total amount is above 600:
SELECT SUM(amount), customer_id FROM Orders
GROUP BY customer_id
HAVING SUM(amount) > 600;


-- give me the sum of orders per customer, when the total amount is above 600, order by amount sum and limit to top 10:
SELECT SUM(amount), customer_id FROM Orders
GROUP BY customer_id
HAVING SUM(amount) > 600;
ORDER BY SUM(amount) DESC
LIMIT 10;

-- give me the amount of items in pending state, per customer (ordered by amount of items in pendin desc) - for customers who have at least two items in pending state
SELECT COUNT(*) as pendings, customer
FROM Shippings
WHERE status = 'Pending'
GROUP BY customer
HAVING pendings>=2
ORDER BY pendings DESC;


-- give me the users and his orders, for the users with at two items of the same order:
SELECT customer_id, item, COUNT(*) as item_purchases
FROM Orders
GROUP BY customer_id, item
HAVING item_purchases >= 2
ORDER BY item_purchases DESC;
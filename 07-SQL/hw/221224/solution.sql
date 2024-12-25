Based on the data here - https://www.programiz.com/sql/online-compiler/

INSERT INTO Orders (item, amount, customer_id)
VALUES ('Keyboard', 500, 4);

1) Write an SQL statement lists the number of customers in each country, sorted high to low (Only include countries with more than 5 customers)

-- Firstly let's insert the data:
INSERT INTO Customers (customer_id, first_name, last_name, age, country)
VALUES
(6, 'James', 'Bond', 37, 'UK'),  
(7, 'Harry', 'Potter', 24, 'UK'),  
(8, 'Sherlock', 'Holmes', 40, 'UK'),  
(9, 'Elizabeth', 'Bennet', 28, 'UK'),  
(10, 'Mr.', 'Bean', 45, 'UK'),  
(11, 'Mary', 'Poppins', 35, 'UK'),  
(12, 'Arthur', 'Dent', 30, 'UK'),
(13, 'Tony', 'Stark', 48, 'USA'),  
(14, 'Bruce', 'Wayne', 42, 'USA'),  
(15, 'Clark', 'Kent', 36, 'USA'),  
(16, 'Diana', 'Prince', 35, 'USA'),  
(17, 'Peter', 'Parker', 21, 'USA'),  
(18, 'Natasha', 'Romanoff', 34, 'USA'),
(19, 'John', 'Watson', 40, 'UK'),  
(20, 'Albus', 'Dumbledore', 40, 'UK'),  
(21, 'Molly', 'Hooper', 40, 'UK');
INSERT INTO Orders (order_id, item, amount, customer_id)
VALUES
(7, "Monitor", 700, 2),
(8, "Mousepad", 900, 3),
(9, "Mousepad", 400, 2),
(10, "Mousepad", 400, 4);

-- the query:

SELECT COUNT(*), country
FROM Customers
GROUP BY country
HAVING COUNT(*) > 5
ORDER BY COUNT(*);

2) Give me all the users with at least two orders

SELECT COUNT(*) as total_orders, customer_id
FROM Orders
GROUP BY customer_id
HAVING total_orders >= 2
ORDER BY total_orders DESC;

3) Give me how many people has the name 'John' among my customers.
SELECT COUNT(*) as total_johns
FROM Customers
WHERE first_name = 'John';

4) Give me how many different people I have in the same age in the same country.
SELECT COUNT(*) as total_customers, country, age
FROM Customers
GROUP BY country, age;

5) Give me the customer ids of people that was buying Keyboard, have at least two items and they paid for them at least 600$
SELECT customer_id, SUM(amount) as total_paid, COUNT(*) as total_orders
FROM Orders
WHERE item = 'Keyboard'
GROUP BY customer_id
HAVING total_paid > 600 AND total_orders >=2
ORDER BY total_paid DESC;


6) Give me the customer ids that did at least two orders with the same price.

SELECT customer_id, amount, COUNT(*) as total_orders
FROM Orders 
GROUP BY customer_id, amount
HAVING total_orders > 1;

-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
  
sortByField=email&order=desc

'; DROP TABLE Customers;'
-- in the backend:
`SELECT first_name as fname, age
FROM Customers WHERE age > 30 ORDER BY ${sortByField} ${order} LIMIT 3`;

SELECT first_name as fname, age
FROM Customers WHERE age > 30 ORDER BY age desc LIMIT 3

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

-- getting all the tasks that their status starts with 'Do', like: Done, Doing, Do on another month
Select * from Tasks WHERE status LIKE 'Do%'

SELECT * FROM Customers
WHERE first_name NOT LIKE 'B%';

-- give me all the customers that are in USA or UK
SELECT * FROM Customers
WHERE country IN ('USA', 'UK');

-- give me all the customers that are not in USA and not in UK
SELECT * FROM Customers
WHERE country NOT IN ('USA', 'UK');

-- give me all the tasks that wasn't done yet (for example: we will get tasks with status: 'in progress', 'wont do', 'delayed', 'todo', 'backlog', 'pending product review')
SELECT * FROM Tasks
WHERE status NOT IN ('done', 'resolved', 'completed');

-- give me all the user_ids that did anything today (for example in UserActivity table
SELECT DISTINCT user_id FROM UserActivity WHERE activity_date = "15/12/2024"

-- give me all columns from Customers, of the customers who are mexican and their custID <= 10, OR they are spanish
SELECT * FROM Customers
WHERE (Country='Mexico' AND CustomerID <= 10) OR Country = 'Spain';

-- select all columns from Orders between amount range:
SELECT * FROM Orders WHERE amount >= 200 AND amount <= 400;
-- the same is simpler with:
SELECT * FROM Orders WHERE amount BETWEEN 200 AND 400;
-- if i would like to add another condition (for example that the amount won't be 300):
SELECT * FROM Orders WHERE amount BETWEEN 200 AND 400 AND amount != 300;
-- get all orders outside the range of 200 and 400 (not in this range):
SELECT * FROM Orders WHERE amount NOT BETWEEN 200 AND 400;

-- NOT greater than:
SELECT * FROM Customers WHERE NOT CustomerID > 50;
-- or the same can be with this query:
SELECT * FROM Customers WHERE CustomerID <= 50;

-- NOT less than:
SELECT * FROM Customers WHERE NOT CustomerId < 50;
-- the same can be with this query:
SELECT * FROM Customers WHERE CustomerId >= 50;

-- Note: There is a not-less-than operator: !< that would give you the same result.

-- CRUD = Create, Read, Update, Delete
--  Create (API endpoint = PUT, SQL query = INSERT INTO..)
--  Read (API endpoint = GET, SQL query = SELECT)
--  Update (API endpoint = POST, SQL query = UPDATE)
--  Delete (API endpoint = DELETE, SQL query = DELETE)

-- INSERT query example:
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

-- multiple values insertion:
NSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');

-- give me all unassigned tasks that are older than 3 months:
SELECT name, description, priority, status
FROM Tasks
WHERE assignee IS NULL AND date <= Convert(datetime, '2024-10-01');

SELECT first_name
FROM Customers
WHERE Country IS NOT NULL;

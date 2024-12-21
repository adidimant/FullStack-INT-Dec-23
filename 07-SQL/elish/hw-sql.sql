--Get all the orders that the order deal is above 300$

SELECT *
FROM Orders 
WHERE amount > 300;

--Get all the unique item name from the orders

SELECT DISTINCT item
FROM Orders;

--Get all the unique items of specific customer ID = 4

SELECT DISTINCT item
FROM Orders
WHERE customer_id = 4;

--get how many shippings are in "Pending" status

SELECT COUNT(*) as pending_count
FROM Shipments
WHERE status = 'Pending';

--Get how many customers have more than 1 item in "Pending" status

SELECT customer, COUNT(*) AS pending_count
FROM Shippings
WHERE status = 'Pending'
GROUP BY customer
HAVING COUNT(*) > 1;

--get all the customers that their country is USA and their age is higher than 25, OR they are from UK and their age is lower than 25

SELECT *
FROM Customers
WHERE (country = 'USA' AND age > 25) OR (country = 'UK' AND age < 25);

--Get all the customers that are from UK and their first name starts with "D..."

SELECT *
FROM Customers
WHERE country = 'UK' AND first_name LIKE 'D%';

--Get the average amount of all the last orders

SELECT AVG(amount) AS average_last_order_amount
FROM Orders
WHERE order_id IN (
    SELECT MAX(order_id)
    FROM Orders
    GROUP BY customer_id
);

--get the average amount of all the last orders that are at least 300$

SELECT AVG(amount) AS average_last_order_amount
FROM Orders
WHERE order_id IN (
    SELECT MAX(order_id)
    FROM Orders
    GROUP BY customer_id
)
AND amount >= 300;
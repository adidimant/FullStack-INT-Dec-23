
  --Write an SQL statement lists the number of customers in each country, sorted high to low (Only include countries with more than 5 customers)
SELECT COUNT(*) as numOfCustomers FROM Customers
GROUP BY country HAVING numOfCustomers>5
ORDER BY numOfCustomers DESC;


--2) Give me all the users with at least two orders
SELECT customer_id, first_name ,last_name FROM Customers
WHERE customer_id IN ( SELECT COUNT(*) AS sumOfOrdersPerCustomer FROM Orders WHERE customer_id >= 2);

--3) Give me how many people has the name 'John' among my customers.
SELECT COUNT(*) AS users_firstName_John FROM Customers
GROUP BY first_name HAVING first_name ='John';

--4) Give me how many different people I have in the same age in the same country.
SELECT COUNT(*)  AS number_of_customers_by_age  FROM Customers
GROUP BY country ,age HAVING number_of_customers_by_age > 1;
--was not able to COUNT all the numbers together after the COUNT(*) operation.

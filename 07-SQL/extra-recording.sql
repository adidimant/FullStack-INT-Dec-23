
-- extra recording:
-- 1) using SQL to query database from the backend: https://node-postgres.com/
-- 2) fields types (varchar, boolean,date...)
-- 3) primary key, auto increment

-- 4) TABLE operations
CREATE TABLE
ALTER TABLE add column1 VARCHAR set default 'true'

const client = new Client({ url: <>, port: 5432, username: 'aa', password: '<password>'})

client.update('Customer', { user_id: 'my-user-id'}, { address: '123', city: 'herzelyia'});

CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

ALTER TABLE Customers
ADD Email varchar(255);

ALTER TABLE table_name
RENAME COLUMN person_id to identifier;

ALTER TABLE Customers
DROP COLUMN Email;

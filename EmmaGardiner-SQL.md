Structured Query Language (SQL)
===============================
Structured Query Language (SQL), pronounced "sequel", is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). In comparison to older read/write APIs like ISAM or VSAM, SQL offers two main advantages: 
1. It introduced the concept of accessing many records with one single command.
2. It eliminates the need to specify how to reach a record, e.g. with or without an index.

The uses of SQL include modifying database table and index structures, adding, updating and deleting rows of data, and retrieving subsets of information from within a database for transaction processing and analytics applications. Queries and other SQL operations take the form of commands written as statements. Commonly used SQL statements include select, add, insert, update, delete, create, alter and truncate.
![Alt text](https://azure.microsoft.com/en-us/services/sql-server-stretch-database/)

SQL commands and syntax
-------------------------
SQL commands are divided into several different types, among them data manipulation language (DML) and data definition language (DDL) statements, transaction controls and security measures. The DML vocabulary is used to retrieve and manipulate data, while DDL statements are for defining and modifying database structures. The transaction controls help manage transaction processing, ensuring that transactions are either completed or rolled back if errors or problems occur. The security statements are used to control database access as well as to create user roles and permissions
SQL syntax is the coding format used in writing statements. Say that our table is called _mytable_ , an Example of this format is:

**SELECT column, another_column
FROM mytable**


Joins within SQL
----------------
One method in SQL is to join two table together. A join clause is used to combine rows from two or more tables, based on a related column between them. There are four different types of joins:
1. INNER JOIN: Returns all records that have matching values in both tables
2. LEFT JOIN: Returns all records from the left table, and the all matched records from the right table
3. RIGHT JOIN: Returns all records from the right table, and the all matched records from the left table
4. OUTER JOIN: Returns all the records where there is a match on either the left or right table

<img src="https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_orig.jpg" width="700">
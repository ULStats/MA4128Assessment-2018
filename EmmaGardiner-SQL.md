Structured Query Language (SQL)
===============================
##### _Emma Gardiner_
##### 14165864


<img src="https://azurecomcdn.azureedge.net/cvt-08d30f7c5efd7cdd3322a8a33933c6e90debe131f3e793d87bdcefb4ba6123e9/images/page/services/sql-server-stretch-database/04-streamline.png" width="500">

Structured Query Language (SQL), pronounced "sequel", is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). In comparison to older read/write APIs like ISAM or VSAM, SQL offers two main advantages: 
1. It introduced the concept of accessing many records with one single command.
2. It eliminates the need to specify how to reach a record, e.g. with or without an index.

The uses of SQL include modifying database table and index structures, adding, updating and deleting rows of data, and retrieving subsets of information from within a database for transaction processing and analytics applications. Queries and other SQL operations take the form of commands written as statements. Commonly used SQL statements include select, add, insert, update, delete, create, alter and truncate.

Brief History of SQL
--------------------
In 1970, Dr. E.F. Codd published "A Relational Model of Data for Large Shared Data Banks," an article that outlined a model for storing and manipulating data using tables. Shortly after Codd's article was published, IBM began working on creating a relational database. Between 1979 and 1982, Oracle, Relational Technology, Inc., and IBM all put out commercial relational databases, and by 1986 they all were using SQL as the data query language.

In 1986, the American National Standards Institute (ANSI) standardized SQL. This standard was updated in 1989, in 1992, 1999, 2003, 2006 and 2008. Standard SQL is sometimes called ANSI SQL. All major relational databases support this standard but each has its own proprietary extensions.

SQL commands and syntax
-------------------------
SQL commands are divided into several different types, among them data manipulation language (DML) and data definition language (DDL) statements, transaction controls and security measures. The DML vocabulary is used to retrieve and manipulate data, while DDL statements are for defining and modifying database structures. The transaction controls help manage transaction processing, ensuring that transactions are either completed or rolled back if errors or problems occur. The security statements are used to control database access as well as to create user roles and permissions
SQL syntax is the coding format used in writing statements. Some of The Most Important SQL Commands are:
```
SELECT - extracts data from a database
FROM - table data is taken from
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE INDEX - creates an index 
DROP INDEX - deletes an index
```

Say that our table is called _mytable_ , an Example of this format is:
```
SELECT column, another_column
FROM mytable;
```

Unions with SQL
---------------
The **UNION** operator is used to combine the result-set of two or more **SELECT** statements. Each **SELECT** statement within UNION must have the same number of columns. The columns must have similar data types and the column in each **SELECT** statement must be in the same order. 
```
SELECT column FROM table1
UNION
SELECT column FROM table2;
```
The UNION operator selects only distinct values by default. To allow duplicate values, use **UNION ALL**:
```
SELECT column FROM table1
UNION ALL
SELECT column FROM table2;
```


Joins within SQL
----------------
One method in SQL is to join two table together. A **JOIN** clause is used to combine rows from two or more tables, based on a related column between them. There are four different types of joins:
1. **INNER JOIN**: Returns all records that have matching values in both tables
2. **LEFT JOIN**: Returns all records from the left table, and the all matched records from the right table
3. **RIGHT JOIN**: Returns all records from the right table, and the all matched records from the left table
4. **OUTER JOIN**: Returns all the records where there is a match on either the left or right table

<img src="https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_orig.jpg" width="700">

An Example of a join may be if you have two table CUSTOMER_TBL and PRODUCT_TBL, such that

##### PRODUCT_TBL
| CUSTOMER_ID   | CUSTOMER_NAME |  ORDER_ID   |
| :-----------: |:-------------:| :----------:|
| 000998        | Joe Bloggs    |   15315     |
| 009871        | Sarah White   |   15542     |
| 001112        | Paula Flynn   |   15563     |
| 000259        | Pat Shortt    |   15316     |
| 001111        | Mike Myers    |   15330     |

and 

##### PRODUCT_TBL
| PRODUCT_ID  | PRODUCT_NAME  |
|:-----------:|--------------:|
|   10010     | Red Pen       |
|   00021     | Blue pen      |
|   00897     | Black pen     |
|   01895     | Grey pen      |
|   02223     | Green pen     |
|   00877     | Yellow pen    |

And you decide to do an INNER JOIN
```
CREATE TABLE NEW_TABLE
SELECT a.CUSTOMER_ID,
       a.ORDER_ID
       b.PRODUCT_ID
       B.PRODUCT_NAME
FROM CUSTOMER_TBL a
INNER JOIN PRODUCT_TBL b
    ON a.PRODUCT_ID = b.PRODUCT_ID
```
Which gives us the table
##### NEW_TABLE
| CUSTOMER_ID   | ORDER_ID      | PRODUCT_ID  | PRODUCT_NAME  |
| ------------- |:-------------:|:-----------:|--------------:|
| 000998        | 15315         |   10010     | Red Pen       |
| 000259        | 15316         |   00021     | Blue pen      |
| 001111        | 15330         |   00897     | Black pen     |



#### *_References_*:
[Brief History of SQL](https://www.webucator.com/tutorial/learn-sql/relational-database-basics/brief-history-of-sql-reading.cfm)
[UNIONs and JOINs](https://www.essentialsql.com/what-is-the-difference-between-a-join-and-a-union/)
[SQL Syntax](https://www.w3schools.com/sql/)


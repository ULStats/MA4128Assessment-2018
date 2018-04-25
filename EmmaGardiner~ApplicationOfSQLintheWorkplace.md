Applications of SQL in the Workplace
========================================
##### _Emma Gardiner_
##### 14165864
<img src="http://www.iqonlinetraining.com/wp-content/uploads/2016/05/SQL-database-code-Feature_1290x688_MS1-1024x509.jpg" width="500">


SQL is simply a basic programming language, which is used for organising information in a database and to send and recienve information about the database. It has necessary applications for large companies, but some medium and small companies have been found to used SQL in recent year.SQL is very useful for business-to-customer companies and also for companies that specialise in delivering a product to its customers.

SQL is compatible with most high level programming languages and thus it is often used to help other programes to interact with its database. SQL is seen as a necessary skill for optimaization in many workplaces.

Database management
-------------------
<img src="http://fulldistributors.net/wp-content/uploads/2014/12/Data-Manager-72dpi-300x206.jpg" width="500">
SQL’s sole design is to manage databases, and that’s the biggest benefit it can have for your company. SQL can run complex queries that search for specific pieces of information based on listed criteria. For example, if you had a database of employee payments and you wanted to just see the amount paid to employees in the marketing division, SQL could run a query that would only pull information about those individuals.

Little coding required
-----------------------
SQL doesn't require long lines of code. SQL only has a handful of commands, making a simple programming language to learn and much easier to learn that most programming languages. It is true that this small handfull of commands can be used in a large vaietry of ways, meaning that it can become slightly complicated, but compared to most, SQL is one of the least code dependent programming languages. For example in order to obtain all employees aged between 25 and 30 who live in Dublin from a table called EMPLOYEE_TABLE, the code is simply,
```
SELECT EMPLOYEE_ID,
       EMPLOYEE_FIRST_NAME,
       EMPLOYEE_LAST_NAME
FROM EMPLOYEE_TABLE
WHERE 25 <= EMPLOYEE_AGE <= 30
      AND COUNTY = "DUBLIN"
```
Another example could be counting the number of employees in each county, where the code is,
```
SELECT COUNTY,
       COUNT(DISTINCT EMPLOYEE_ID) AS NUMBER_OF_EMPLOYEES
FROM EMPLOYEE_TABLE
GROUPBY COUNTY
```
where the DISTINCT conmand makes sure that an employees number is only counted once.


Used by large companies
--------------------------
One of the largest companies in the world, Microsoft, use SQL. Microsoft uses it in Open Database Connectivity, SQL Server, and ActiveX Data Objects. Many large companies use this Microsoft SQL server, such as:
*    Nigel Frank International Limited [Companies Website](https://www.nigelfrank.com)
*    Jack Henry & Associates, Inc. [Companies Website](https://www.jackhenry.com)
*    Eagle Creek Software Services, Inc.[Companies Website](https://www.eaglecrk.com)
*    ARUP Laboratories [Companies Website](https://www.aruplab.com)
*    PEOPLE TECH GROUP [Companies Website](https://www.peopletechgroup.com)


You’ll also find that a majority of software development companies out there will use SQL with their programmess in order to manage databases efficiently.

Relational database managment
------------------------------
<img src="https://blog.udemy.com/wp-content/uploads/2014/01/shutterstock_117975625-300x275.jpg" width="500">

Firstly, what is a relational database? A relational database is a collection of data items organized as a set of formally-described tables from which data can be accessed or reassembled in many different ways without having to reorganize the database tables.
These relational databases are designed to have information from one table that relates to another table. This if often through a primary key. An example of this is would be two tables with an ID value. SQL makes it easy to relate these tables through primary keys in order for them to retrieve information from several tables at once which is then displayed in a very easy to read mannor.

An example of this would be, say you have two tables. The first table contains students details, while the second table contacins classes. Using SQL, you can join elements from both tables, such as student IDs, to find which students are taking what classes.


Why companies choose to use SQL
--------------------------------
So why do companies choose to use SQL sever for machine learning model management over others? It's safe to say that SQL simply makes life easier. It doesn't take a long time for you programmer to set up and it's easy to maintain. As for database managment, SQL is an organised system that protects your database from accidental manilipulation. 


However more technical reasons for choosing are:
*   SQL servers store analytical models created by expert data scientists, making it easy for reuse. These models can be scaled and then used by many other applications. 
*   Another reason SQL is chose is because SQL reduces the difficulty of working with models such as deploy models and managing models metadata as well as offering version contol and security. 
*   SQl also lowers barriers to adopting analytical models and enables faster development if intelligent application with rapid iteration. 
*   However, most importantly, SQL enables anyone to participate in the modelling process. 




#### *_References_*:
[An Intro SQL and what it accomplishes for business](https://www.itbusiness.ca/)


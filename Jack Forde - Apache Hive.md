<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Apache_Hive_logo.svg/853px-Apache_Hive_logo.svg.png" width="400" height="400">

## Apache Hive
Apache Hive is considered the standard instrument for interactive SQL queries over petabytes of data in Hadoop. Hadoop is an open source, Java-based programming framework that supports the processing and storage of extremely large data sets in a distributed computing environment. It is part of the Apache project. 

Data analysts use Hive to query, summarize, explore and analyze that data. Hive is used on top of Hadoop and supports analysis of large datasets stored in Hadoop's HDFS and other compatible file systems. Apache Hive has three main functions: 
* data summarization
* query
* analysis.

## Advantages to Using Hive
* #### Universal
There is not one single Hive format in which the data must be. Hive supports tab separated and comma separated text files along with others. The Hive data warehouse software facilitates reading, writing, and managing large datasets residing in distributed storage using SQL. This makes it easy to use as most data scientists will be familiar with SQL. Hives SQL can also be extended by with user defined functions.

* #### Fast	
Interactive response times, even over huge datasets.

* #### Scalable and Extensible	
Hive is designed to maximise scalability as data variety and volume grows, more commodity machines can be added, without a corresponding reduction in performance.

## Comparison with other Databases
Hive is different to other programmes mainly because it was built to run wih Hadoop. In other databases typically the table enforces the schema when the data is loaded into the table. This enables the database to make sure that the data entered follows the representation of the table as specified by the table definition. This design is called schema on write. Advantages to this are that quality control checks can be done on the data when it is being input. Hadoop however was built to organize and store massive amounts of data with a "schema on read" architecture. This means Hive does not verify the data against the table schema on write and instead does run time checks when the data is read. This means the database is quicker to load initially however it can be slower when the data is being queried.
<img src="https://d3ansictanv2wj.cloudfront.net/hwyn_0105-2d2be3e87d610d5bece7f647d47d5fcc.png" width="700" height="400">

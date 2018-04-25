![Apache Spark logo](https://softwareengineeringdaily.com/wp-content/uploads/2016/02/Spark-bigdata_feature.jpg)

## Apache Spark
Jack Cantillon 14146746

#### Overview
From modest beginnings in the AMPLab at U.C. Berkeley in 2009, Apache Spark has become one of the key "big data" distributed processing frameworks in the world. Apache Spark is a fast and general purpose clustering computing system for large scale data processing. Spark can be used in a variety of ways, provides native bindings for the Java, Scala, Python, and R programming languages, and supports SQL, streaming data, machine learning, and graph processing. Banks, telecommunications companies, games companies, governments, and all of the major tech giants such as Apple, Facebook, IBM, and Microsoft all uses Apache Spark throughout the working day.

Apache Spark is an open-source cluster-computing framework. Resilient distributed dataset (RDD) is the basis of Apache Spark. RDD is a read only set of data objects spread over a cluster of machines. Spark and RDD were created in 2012 in reaction to the deficiencies in the MapReduce clustering computer paradigm. Spark allows the application of iterative algorithms, visits data sets numerous times via a loop, and iterative/ exploratory data analysis. The latency (time interval between the simulation and response) of such functions can be decresed by several orders of magnitude in contrast to MapReduce implementation.

#### Spark Core

Spark Core is the foundation of the overall project. It supplies distributed task dispatching, scheduling, and basic I/O (input and output) functionalities, exposed through an application programming interface (for Java, Python, Scala, and R) centered on the resilient distributed datasets (RDD) abstraction. This interface mirrors a functional/higher-order model of programming: a "driver" program invokes parallel operations such as map, filter or reduce on an RDD by passing a function to Spark, which then schedules the function's execution in parallel on the cluster. These operations, and additional ones such as joins, take RDDs as input and produce new RDDs. RDDs are immutable (unchanged over time) and their operations are lazy; fault-tolerance is attained by keeping track of the "lineage" of each RDD (the sequence of operations that produced it) so that it can be reconstructed in the case of data loss. RDDs can contain any type of Python, Java, or Scala objects. Apart from the RDD-oriented functional style of programming, Spark provides two restricted forms of shared variables: broadcast variables reference read-only data that needs to be available on all nodes, while accumulators can be used to program reductions in an imperative style.

A typical example of RDD-centric functional programming is the following Scala program that computes the frequencies of all words occurring in a set of text files and prints the most common ones. Each map, flatMap (a variant of map) and reduceByKey takes an anonymous function that performs a simple operation on a single data item (or a pair of items), and applies its argument to transform an RDD into a new RDD.

```
val conf = new SparkConf().setAppName("wiki_test") // create a spark config object
val sc = new SparkContext(conf) // Create a spark context
val data = sc.textFile("/path/to/somedir") // Read files from "somedir" into an RDD of (filename, content) pairs.
val tokens = data.flatMap(_.split(" ")) // Split each file into a list of tokens (words).
val wordFreq = tokens.map((_, 1)).reduceByKey(_ + _) // Add a count of one to each token, then sum the counts per word type.
wordFreq.sortBy(s => -s._2).map(x => (x._2, x._1)).top(10) // Get the top 10 words. Swap word and count to sort by count.
```
#### Spark SQL

Originally known as Shark, Spark SQL has become a key component to the Apache Spark project. It is likely the interface most commonly used by today’s developers when creating applications. Spark SQL is focused on the processing of structured data, using a dataframe approach borrowed from R and Python. But as the name suggests, Spark SQL also provides a SQL2003-compliant interface for querying data, bringing the power of Apache Spark to analysts as well as developers.

Alongside standard SQL support, Spark SQL provides a standard interface for reading from and writing to other datastores including JSON, HDFS, Apache Hive, JDBC, Apache ORC, and Apache Parquet. Other popular stores—Apache Cassandra, MongoDB, Apache HBase, and many others—can be used by pulling in separate connectors from the Spark Packages ecosystem.

Selecting some columns from a dataframe is as simple as this line:
```
citiesDF.select(“name”, “pop”)
```
Using the SQL interface, we register the dataframe as a temporary table, after which we can issue SQL queries against it:
```
citiesDF.createOrReplaceTempView(“cities”)
spark.sql(“SELECT name, pop FROM cities”)
```
Spark SQL provides a domain-specific language (DSL) to manipulate DataFrames in Scala, Java, or Python. It also provides SQL language support, with command-line interfaces and ODBC/JDBC server. Although DataFrames lack the compile-time type-checking afforded by RDDs, as of Spark 2.0, the strongly typed DataSet is fully supported by Spark SQL as well.

```
import org.apache.spark.sql.SQLContext

val url = "jdbc:mysql://yourIP:yourPort/test?user=yourUsername;password=yourPassword" // URL for your database server.
val sqlContext = new org.apache.spark.sql.SQLContext(sc) // Create a sql context object

val df = sqlContext
  .read
  .format("jdbc")
  .option("url", url)
  .option("dbtable", "people")
  .load()

df.printSchema() // Looks the schema of this DataFrame.
val countsByAge = df.groupBy("age").count() // Counts people by age
```
#### Spark MLlib

Apache Spark also bundles libraries for applying machine learning and graph analysis techniques to data at scale. ***Spark MLlib*** includes a framework for creating machine learning pipelines, allowing for straight foward use of feature extraction, selections, and transformations on any structured dataset. MLlib comes with distributed implementations of clustering and classification algorithms including k-means clustering and random forests that can be swapped in and out of custom pipelines with ease. Models can be trained by data scientists in Apache Spark using R or Python, saved using MLLib, and then imported into a Java-based or Scala-based pipeline for production use.

 Many common machine learning and statistical algorithms have been implemented and are shipped with MLlib which simplifies large scale machine learning pipelines, including:
 - dimensionality reduction techniques such as singular value decomposition (SVD), and principal component analysis (PCA)
 - classification and regression: support vector machines, logistic regression, linear regression, decision trees, naive Bayes classification
 - summary statistics, correlations, stratified sampling, hypothesis testing, random data generation, 
    

#### Spark Streaming


Spark Streaming was one of the first additions to Apache Spark that allowed it gain traction in environments that required real-time or near real-time processing. Previously, batch and stream processing in the world of Apache Hadoop were separate things and need to be carried out individually. One would write MapReduce code for your batch processing needs and use something like Apache Storm for your real-time streaming requirements. This obviously leads to completely different codebases that need to be kept in sync for the application domain despite being based on completely different frameworks, requiring different resources, and involving different operational concerns for running them.

Spark Streaming extended the Apache Spark concept of batch processing into streaming by breaking the stream down into a continuous series of microbatches, which could then be manipulated using the Apache Spark API. In this way, code in batch and streaming operations can share the same code, running on the same framework, thus reducing both developer and operator overhead. Everybody wins.

#### Financial Applications

Spark facilitates the calculation of computationally-intensive statistics including VaR (value at risk) via the Monte Carlo method. It allows an individual to better understand the risk characteristics of large portfolios, allowing them to calculate it before executing trades to help make informed and immediate decisions. Value at risk (VaR) is a measure of the risk of loss for investments. It estimates how much a set of investments might lose (with a given probability), given normal market conditions, in a set time period such as a day.

VaR is typically used by firms and regulators in the financial industry to gauge the amount of assets needed to cover possible losses. Spark aims to utilize VaR (Value at risk) in order to better understand the potential risks involved when dealing with these large scale portfolios. A VaR calculation considers a given confidence level: a VaR of €1,000 with a 95% confidence level means that we believe our investment stands only a 5% chance of losing more than €1,000 over the time period.

 

#### History

Matei Zaharia was the original creater of Apache Spark at University of California's AMPLab in 2009. It open sourced under a BSD licence in 2010. The project was donated to Apache Software Foundation in 2013 and switched its licence to Apache 2.0 in Febuary 2014. 
In November 2014 Spark became a Top-Level Apache project. Databricks, another company founded by Zaharia, set a new world record for large scale sorting using Spark. By 2015 Spark had over 1,000 contributers which made it one of Apache Software Foundations most active projects and one of the most popular open source big data projects. 

#### References
* 

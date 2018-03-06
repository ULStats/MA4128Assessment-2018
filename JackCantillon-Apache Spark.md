## Apache Spark
Jack Cantillon 14146746

## Overview

Apache Spark is an open-source cluster-computing framework. It was created in the AMPLab at the University of California in Berkeley. The AMPLabis a lab that specialises in the analytics of Big Data. Apache Spark enables an interface that allows wntire clusters to be programmed with data parallelism and fault tolerance.

Resilient distributed dataset (RDD) is the basis of Apache Spark. RDD is a read only set of data objects spread over a cluster of machines. Spark and RDD were created in 2012 in reaction to the deficiencies in the MapReduce clustering computer paradigm. Spark allows the application of iterative algorithms, visits data sets numerous times via a loop, and iterative/ exploratory data analysis. The latency (time interval between the simulation and response) of such functions can be decresed by several orders of magnitude in comtrast to MapReduce implementation.

Spark needs both a cluster manager and a distributed storage system. Spark support standalone cluster management. For distribution storage, Spark can interface with a large variety, such as Hadoop Distributed files System (HDFS). Spark allows backs a pseudo-distributed local mode, normally used for the development or examination purposes where distributed storeage is not essential and the local files system can be utilized as an alternative.


## Spark Core

Spark Core is the foundation of the overall project. It supplies distributed task dispatching, scheduling, and basic I/O (input and output) functionalities, exposed through an application programming interface (for Java, Python, Scala, and R) centered on the resilient distributed datasets (RDD) abstraction. This interface mirrors a functional/higher-order model of programming: a "driver" program invokes parallel operations such as map, filter or reduce on an RDD by passing a function to Spark, which then schedules the function's execution in parallel on the cluster. These operations, and additional ones such as joins, take RDDs as input and produce new RDDs. RDDs are immutable (unchanged over time) and their operations are lazy; fault-tolerance is attained by keeping track of the "lineage" of each RDD (the sequence of operations that produced it) so that it can be reconstructed in the case of data loss. RDDs can contain any type of Python, Java, or Scala objects. Apart from the RDD-oriented functional style of programming, Spark provides two restricted forms of shared variables: broadcast variables reference read-only data that needs to be available on all nodes, while accumulators can be used to program reductions in an imperative style.

## Spark Streaming

Spark Streaming utilizes Spark Core's fast scheduling capacity to perform streaming analytics (technologies designed to assist the construction of event-driven information systems). It takes in data in mini-batches and performs RDD transformations on those mini-batches of data. This design enables the same set of application code written for batch analytics to be used in streaming analytics, thus facilitating easy implementation of lambda architecture. However, this convenience comes with the penalty of latency equal to the mini-batch duration. Other streaming data engines that process event by event rather than in mini-batches include Storm and the streaming component of Flink. Spark Streaming has support built-in to consume from Kafka, Flume, Twitter, ZeroMQ, Kinesis, and TCP/IP sockets.


## History

Matei Zaharia was the original creater of Apache Spark at University of California's AMPLab in 2009. It open sourced under a BSD licence in 2010. The project was donated to Apache Software Foundation in 2013 and switched its licence to Apache 2.0 in Febuary 2014. In November 2014 Spark became a Top-Level Apache project. Databricks, another company founded by Zaharia, set a new world record for large scale sorting using Spark. By 2015 Spark had over 1,000 contributers which made it one of Apache Software Foundations most active projects and one of the most popular open source big data projects. 

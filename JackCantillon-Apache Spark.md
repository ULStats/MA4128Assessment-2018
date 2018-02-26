## Apache Spark
Jack Cantillon 14146746

Apache Spark is an open-source cluster-computing framework. It was created in the AMPLab at the University of California in Berkeley. The AMPLabis a lab that specialises in the analytics of Big Data. Apache Spark enables an interface that allows wntire clusters to be programmed with data parallelism and fault tolerance.

Resilient distributed dataset (RDD) is the basis of Apache Spark. RDD is a read only set of data objects spread over a cluster of machines. Spark and RDD were created in 2012 in reaction to the deficiencies in the MapReduce clustering computer paradigm. Spark allows the application of iterative algorithms, visits data sets numerous times via a loop, and iterative/ exploratory data analysis. The latency (time interval between the simulation and response) of such functions can be decresed by several orders of magnitude in comtrast to MapReduce implementation.

Spark needs both a cluster manager and a distributed storage system. Spark support standalone cluster management. For distribution storage, Spark can interface with a large variety, such as Hadoop Distributed files System (HDFS). Spark allows backs a pseudo-distributed local mode, normally used for the development or examination purposes where distributed storeage is not essential and the local files system can be utilized as an alternative.

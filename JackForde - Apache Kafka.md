![Image ApacheKarfka](https://kafka.apache.org/images/logo.png)
## What is it?
Apache Kafka is a distributed streaming platform. A streaming platform typically lets you publish and subscribe to streams of records, store streams of records in a fault-tolerant way and process streams of records as they occur. Kafka was initially developed by LinkedIn before being further developed by the Apache Software Foundation.

Apache Kafka is generally used for two types of applications. The first is building real-time streaming data pipelines that reliably get data between systems or applications. The second is building real-time streaming applications that transform or react to the streams of data.
## How does is work?
To put it simply Apache Kafka stores streams of records in topics and those topics in clusters. Producers write data to topics while consumers read from topics. Streams Processors can read streams from topics, transform and then rewrite them to topics. Connectors allow data to be streamed between Kafka and other systems.

<img src="https://kafka.apache.org/10/images/kafka-apis.png" width="400" height="400">

A topic is a feed to which records are published. Each topic is an ordered list. Clusters store all topics, whether or not they have been consumed, for a set period of time. Each cluster can have its own retention period which defines how long a record will be stored. For example if the retention period is set to be one day, then after one day a record will be discarded to free up space.

When data is written to Kafka it is also replicated for fault-tolerance. The disk structures Kafka uses scale well, meaning Kafka will perform the same whether you have 50 KB or 50 TB of data on the server. Because of this Kafka works very well as a storage system due to its fault-tolerance and scalability.
## What it's used for?
* ### Messaging System
Traditionally a messaging system uses one of two models: queuing and publish and subscribe. In a queue, a pool of consumers may read from a server and each record goes to one of them; in publish-subscribe the record is broadcast to all consumers. Each Model has both advantages and disadvantages. The advantage of Kafka is that every topic has both of these properties. As a result Kafka is often used for scenarios where high throughput, reliable delivery, and scalability are important. Kafka is comparable to traditional messaging systems such as ActiveMQ or RabbitMQ.
* ### Website Activity Tracking
Kafka was originally designed to track website activity. This means thst site activity is published to topics with one topic per activity type e.g. page views, searches. These topics are available for subscription by consumers for a number of cases including real-time processing, real-time monitoring, and loading into data warehousing systems for offline processing and reporting. Activity tracking is usually a high volume process as a single page view can generate many activity messages.
* ### Stream Processing
In Kafka a stream processor is anything that takes continual streams of data from input topics, performs some processing on this and then produces continual streams of data to output topics. It isn't enough to just read, write, and store streams of data, the purpose is to enable real-time processing of streams. Kafka supports fault-tolerant local state, which enables very fast and efficient stateful operations like windowed joins and aggregations. Kafka supports exactly-once processing semantics to guarantee that each record will be processed once and only once even when there is a failure in the middle of processing. The New York Times uses Apache Kafka to store and distribute published content in real-time to the various applications used by its readers.

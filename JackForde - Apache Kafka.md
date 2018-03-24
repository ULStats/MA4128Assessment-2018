![Image ApacheKarfka](https://kafka.apache.org/images/logo.png)
## What is it?
Apache Kafka is a distributed streaming platform. A streaming platform typically lets you publish and subscribe to streams of records, store streams of records in a fault-tolerant way and process streams of records as they occur. Kafka was initially developed by LinkedIn before being further developed by the Apache Software Foundation.

Apache Kafka is generally used for two types of applications. The first is building real-time streaming data pipelines that reliably get data between systems or applications. The second is building real-time streaming applications that transform or react to the streams of data.
## How does is work?
To put it simply Apache Kafka stores streams of records in topics and those topics in clusters. Producers write data to topics while consumers read from topics. Streams Processors can read streams from topics, transform and then rewrite them to topics. Connectors allow data to be streamed between Kafka and other systems.

<img src="https://kafka.apache.org/10/images/kafka-apis.png" width="400" height="400">

A topic is a feed to which records are published. Each topic is an ordered list. Clusters store all topics, whether or not they have been consumed, for a set period of time. Each cluster can have its own retention period which defines how long a record will be stored. For example if the retention period is set to be one day, then after one day a record will be discarded to free up space.
## What it's used for?
* Website Activity Tracking
* Metrics
* Stream Processing - The New York Times uses Apache Kafka to store and distribute published content in real-time to the various applications used by its readers.
* Event Sourcing
* Log Aggregation
### Messaging System
Traditionally a messaging system uses one of two models: queuing and publish and subscribe. In a queue, a pool of consumers may read from a server and each record goes to one of them; in publish-subscribe the record is broadcast to all consumers. Each Model has both advantages and disadvantages. The advantage of Kafka is that every topic has both of these properties. As a result Kafka is often used for scenarios where high throughput, reliable delivery, and scalability are important.

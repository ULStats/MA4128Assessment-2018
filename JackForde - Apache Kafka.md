![Image ApacheKarfka](https://kafka.apache.org/images/logo.png)
## What is it?
Apache Kafka is a distributed streaming platform. A streaming platform typically lets you publish and subscribe to streams of records, store streams of records in a fault-tolerant way and process streams of records as they occur. Kafka was initially developed by LinkedIn before being further developed by the Apache Software Foundation.

Apache Kafka is generally used for two types of applications. The first is building real-time streaming data pipelines that reliably get data between systems or applications. The second is building real-time streaming applications that transform or react to the streams of data.
## How it works?
Kafka maintains feeds of messages in topics. Producers write data to topics and consumers read from topics. Since Kafka is a distributed system, topics are partitioned and replicated across multiple nodes.
## What it's used for?
Apache Kafka is often used as a general-purpose messaging system for scenarios where high throughput, reliable delivery, and horizontal scalability are important. Some examples are;

* Website Activity Tracking
* Metrics
* Stream Processing - The New York Times uses Apache Kafka to store and distribute published content in real-time to the various applications used by its readers.
* Event Sourcing
* Log Aggregation

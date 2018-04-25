Network Analysis
============================

Network theory is the study of graphs as a representation of either symmetric relations or asymmetric relations between discrete objects. In computer science and network science, network theory is a part of graph theory: a network can be defined as a graph in which nodes and/or edges have attributes (e.g. names).

Network Analysis is the general name given to certain specific techniques which can be used for the planning, management and control of projects. 

Two different techniques for Network Analysis were developed in the late 1950's and these were: 
- PERT (for program evaluation and review technique) 
- CPM (for Critical Path Management)

### PERT
PERT was developed to aid the US Navy in the planning and control of its Polaris missile program. This was a project to build a strategic weapons system, namely the first submarine launched intercontinental ballistic missile, at the time of the cold war between the USA and Russia. Military doctrine at that time emphasised 'MAD - mutually assured destruction', namely if the other side struck first then sufficient nuclear weapons would remain to obliterate their homeland. That way peace was preserved. By the late 1950s the USA believed (or more importantly believed that the Russians believed) that American land based missiles and nuclear bombers were vulnerable to a first strike. Hence there was a strategic emphasis on completing the Polaris project as quickly as possible, cost was not an issue. However no one had ever build a submarine launched intercontinental ballistic missile before, so dealing with uncertainty was a key issue. PERT has the ability to cope with uncertain activity completion times (e.g. for a particular activity the most likely completion time is 4 weeks but it could be any time between 3 weeks and 8 weeks). 

### CPM
CPM was developed in the 1950's as a result of a joint effort by the DuPont Company and Remington Rand Univac. As these were commercial companies cost was an issue, unlike the Polaris project mentioned above. In CPM the emphasis is on the trade-off between the cost of the project and its overall completion time (e.g. for certain activities it may be possible to decrease their completion times by spending more money - how does this affect the overall completion time of the project?)

Network analysis is a vital technique in **PROJECT MANAGEMENT**. It enables us to take a *systematic quantitative structured approach* to the problem of managing a project through to successful completion. Moreover, as will become clear below, it has a graphical representation which means it can be understood and used by those with a less technical background.

Network Analysis can be illustrated from the following example:


<pre><code>
Activity                                                   Completion 
number                                                     time (weeks)
1         Redesign product                                      6
2         Redesign packaging                                    2
3         Order and receive components for redesigned product   3
4         Order and receive material for redesigned packaging   2
5         Assemble products                                     4
6         Make up packaging                                     1
7         Package redesigned product                            1
8         Test market redesigned product                        6
9         Revise redesigned product                             3
10        Revise redesigned packaging                           1
11        Present results to the Board                          1

</code></pre>

It is a list of seperate activities related to the redesigning of a product and its associated completion times. Aside from this list of activities we must also prepare a list of precedence relationships indicating activities which, because of the logic of the situation, must be finished before other activities can start e.g. in the above list activity number 1 must be finished before activity number 3 can start. 

We try to keep this list to a minimum by specifying only immediate relationships, that is relationships involving activities that "occur near to each other in time". Activities 8 and 9 would be examples of activities that have an immediate relationship (activity 8 must be finished before activity 9 can start). 

System administrators, network engineers, security engineers, system operators, even programmers, all use network analysis. Network analyzers are invaluable tools for diagnosing and troubleshooting network problems. Network analyzers used to be dedicated hardware devices that were very expensive. New advances in technology have allowed for the development of software network analyzers. This makes it more convenient and affordable for administrators to effectively troubleshoot a network. It also brings the capability of network analysis to anyone who wishes to perform it.

The following list describes a few reasons why administrators use network analyzers:

- Converting the binary data in packets to human-readable format
- Troubleshooting problems on the network
- Analyzing the performance of a network to discover bottlenecks
- Network intrusion detection
- Logging network traffic for forensics and evidence
- Analyzing the operations of applications
- Discovering a faulty network card
- Discovering the origin of a Denial of Service (DoS) attack
- Detecting spyware or computer worm
- Network programming to debug in the development stage
- Detecting a compromised computer
- Validating compliance with company policy
- As an educational resource when learning about protocols
- For reverse-engineering protocols in order to write clients and supporting programs


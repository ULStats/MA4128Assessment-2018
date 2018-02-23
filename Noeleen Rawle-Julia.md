Julia Language
============================================
# Noeleen Rawle 17071844
## Parallel Computing with Julia

The majority of modern computers have more than one CPU. When several computers are combined together they are called a *cluster*. 
The speed of the CPU's and how fast they can access memory, are the two biggest factors that can influence performance. 
In Julia multiprocessing is based a messaging system, that allows programs to run multiple processses in seperate memory domains similtaneously. 
A programmer working in Julia needs to clearly manage only one of the processes in a two-process system, i.e. in Julia communication is generally one-sided.
In Julia, parallel computing is built on two primitives, which are *remote references* and *remote calls*.
Remote references come in two types: `Future` and `RemoteChannel`.

`Future` using a remote call returns it to it's result. 
To obtain the full value of a result you can use `fetch`, and you can wait for a remote call to finish by calling `wait`on the returned `Future`.
A `RemoteChanel` is rewritable. Each process has a corresponding identifier. The default processes used for parallel operations are referred to as "workers".

[] insert relevant code

### Code Availability and Loading Packages
Any written code must be available on any process that runs it.

[] Include example

Usually you will be loading code from packages of files, and this gives you a lot of flexibility and control over which processes to load.
Using the `@everywhere` macro it is possible to force a command to run on all processes.
It can also be used to directly define a function on all processes.
The base Julia installation is built to support two types of clusters:

* A local cluster
* A cluster spanning machines

A cluster spanning machines uses a passwordless `ssh` login to start the Julia worker process on the specified machine.

### Data Movement
Most of the overhead in a parallel program is made up of sending messages and moving data. 
To achieve performace and scalability it is important to reduce the number of messages and the amount of data sent.
`fetch` can be looked at as and explicit data movement operation.
This is because it directly asks for an object to be moved to the  local machine.

### Global Variables
Closures specified for remote execution i.e. using `remotecall` or expressions executed remotely using `spawn` may refer to global variables.
Remote calls with embedded global references are able to manage globals in the following ways:
* Global constants are also declared as constants on remote nodes.
* In the context of a remote call, globals are re-sent to a destination worker, only if its value has changed. Also, the cluster does not mesh global bindings across nodes.
* If destination workers are referenced as part of a remote call, new global bindings are created.

If global variables must be referenced, consider using `let` to localize global variables.

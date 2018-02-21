XXXXX from the Julia Language
==============================
# Bram Siebert 17179246
## Generating random graphs with Julia


LightGraphs is a package which offers network and graph analysis in Julia. It can generate simple graphs using `SimpleGraph`(for undirected graphs) or `SimpleDiGraph`(For directed graphs), and perhaps more importantly, an API for developing more sophisticated graphs using the `AbstractGraph` type. There are additional packages such as LightGraphsExtras, MetaGraphs and SimpleWeightedGraphs which I will discuss later in this essay.
  I will begin with a basic introduction to LightGraphs. One of the simplest graphs which can be made is an undirected path graph. To make a path graph we use the `PathGraph(N)` command where N is the amount of Nodes. 
```
#Creates an undirected path graph with five nodes
g = PathGraph(5)
nv(g) #Number of nodes
ne(g) #Number of edges
add_edge!(g,1,5) #We can add an edge between the first and fifth node to make a loop.
``` 



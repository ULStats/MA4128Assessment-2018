XXXXX from the Julia Language
==============================
# Bram Siebert 17179246
## Generating random graphs with Julia


A graph *G* is described by a set of vertices *V* and edges *E:G={V,E}*. V is an integer, and E is represented as forward (and in the case of directed graphs, backward) adjacency lists. LightGraphs is a package which offers network and graph analysis in Julia. It can generate simple graphs using `SimpleGraph`(for undirected graphs) or `SimpleDiGraph`(For directed graphs), and perhaps more importantly, an API for developing more sophisticated graphs using the `AbstractGraph` type. There are additional packages such as LightGraphsExtras, MetaGraphs and SimpleWeightedGraphs which I will discuss later in this essay.

  I will begin with a basic introduction to concrete graph graphs. One of the simplest graphs which can be made is an undirected path graph. To make a path graph we use the `PathGraph(N)` command where N is the amount of vertices. 
```
#Creates an undirected path graph with five nodes
g = PathGraph(5)
nv(g) #Number of vertices
ne(g) #Number of edges
add_edge!(g,1,5) #We can add an edge between the first and fifth node to make a loop.
``` 
`SimpleGraph` and `SimpleDiGraph` both use the `Int64` type by default, but they can use any integer type (the smallest is recommended to save memory). It is not possible to add an edge between two vertices if there already exists an edge, doing so will give an error.

  LightGraphs also defines the `AbstractGraph` type. It is used by libraries such as MetaGraphs (for graphs associated with meta-data) and SimpleWeightedGraphs (for weighted graphs). The AbstractGraph type comes with an entire family of types and methods. These types define vertices, edge iterators and the graphs themselves.
  
  With a basic understanding of types we can have a bit of fun making our own graphs.
  ```
using LightGraphs
using GraphPlot
g = DiGraph(9)
for i = 2:nv(g)
    e_1 = Edge(1,i)
    e_2 = Edge(i,i+1)
    add_edge!(g,e_1)
    add_edge!(g,e_2)
end
add_edge!(g,Edge(nv(g),2))
nodelabel = [1:nv(g)]
gplot(g)
```
The above code uses a `for` loop to generate a wheel graph. We have defined our edges before adding them to the graph, but we could concatonate them into the add_edge command as, `add_edge!(g,Edge(1,i))`. There are also lots of commands which make (random) graphs for us. For example, the above graph could also be made using `g = WheelGraph(9)`, although this would be an undirected graph. 

A relatively simple random graph is the ErdosRenyi graph. We can generate these graph in two easy ways with Julia. `erdos_renti(n,ne)` creates a random graph with `n` vertices and `ne` edges. Another way is using `erdos_renyi(n,p)`, where `n` is the number of vertices, and `p` is the probability that any two nodes are connected. We can also make the graph directed, using the code:
```
n = 10
p = 0.25
g = erdos_renyi(n, p,is_directed = true)
```
  
  Many of the methods associated with AbstractGraphs allow us to assess the properties of the graph. `nv(g)` returns the number of vertices in a graph. `ne(g)` returns the number of edges in a graph. Other useful commands include `has_vertex` and `has_edge` which check if the graph includes the specified vertex and edge.`has_self_loops`checks if the graph has self-loops, that is, wether or not any vertices connect to themselves.
  
  We can also check the properties of our vertices and edges. `neighbors` returns an array of neighbours of a vertex, if the graph is directed the outpiut is quivalent to `outneighbors`. The converse command to this is `inneighbors` which returns an array of vertices which connect to the specified vertex (but not from the specified vertex to its neighbours). Edges can be assessed, in a directed graph, using `src` (gives source vertex of an edge) and `dst` (which gives its destination). The `reverse` command creates a new edge in the opposite direction of the passed edge. 
  
 #The LightGraphs package also provides a framework for other package types.


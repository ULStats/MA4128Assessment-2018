

# Bram Siebert 17179246
![Alt text](https://www.wilmott.com/wp-content/uploads/2017/02/jcl-logo-e1487133902152.png)
## Generating random graphs with Julia
==============================

A graph *G* is described by a set of vertices *V* and edges *E:G={V,E}*. V is an integer, and E is represented as forward (and in the case of directed graphs, backward) adjacency lists. LightGraphs is a package which offers network and graph analysis in Julia. It can generate simple graphs using `SimpleGraph`(for undirected graphs) or `SimpleDiGraph`(For directed graphs), and perhaps more importantly, an API for developing more sophisticated graphs using the `AbstractGraph` type. There are additional packages such as LightGraphsExtras, MetaGraphs and SimpleWeightedGraphs which I will discuss later in this essay.

  I will begin with a basic introduction to concrete graphs. One of the simplest graphs which can be made is an undirected path graph. To make a path graph we use the `PathGraph(N)` command where N is the amount of vertices. 
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
  
  Lightgraphs also allows for a number of useful algorithims. We can find the shortest path between two nodes using `a_star(g,n,t)` to find the shortest path between vertex `n` and `t`, using the A* search algorithm. There's a plethora of different algorithims we can use, another relatively simple algorithm is the Dijkstra algorithm. We can find the shortest path to a node `srcs` and all other nodes using `dijkstra_shortert_paths(g,srcs)`. Of course it can help to check if a graph is connected first, we do this using `is_connected(g)`, which outputs true if g is connected. 
  
  In this essay, I have given a brief introduction to the lightgraphs package, and shown some of the useful elementary algorithms which we may want to run on out graphs.
  
  ## Multi-Dimensional arrays with Julia
  
  Like most scientific computing languages, Julia has an array implementation. An array is a collection of objects stored in a multi-dimensional grid (think of a matrix in linear algebra). Although an array may contrain objects of any type, they usually contain floats or integers. Julia, unlike matlab, passes function arguments by reference. Pass by reference means that the assignment operator points to the memory where the object is stored as opposed to the object itself. Therefore, it is important to make copies of parent arrays should we want to work on an array while keeping the original. 
  
  A quick way to initialise an array is by using `zeros(A)` or `ones(A)` which creates a matrix of zeros or ones of dimension A, for example
  `
  x = zeros(3,3)
  `
  But what if we don't want an array of just zeros or ones, we can fill the array with the fill command, `fill!(x,y)`, replaces all entries in the array `x` with the value `y`. We can also create an array with random numbers between zero and one using `rand(A)`. Arrays don't have to contain numbers. For example, they can contain strings, or booleans too (using `trues(A)` or `falses(A)`). We can also create an array manually, like this:
  `
  x = [1 2 3; 4 5 6; 7 8 9]
  `
This is a two dimensional array, where each semi-colon makes a new row.
  
What if we wanted to access specific parts of our array? For exmple the first row, or last column. This is fairly simple in Julia, `x[i,j]` will give us the element in row `i` column `j`.
  
  In a mathematical sense we often think of an array as a matrix. Therefore we often want to do some linear algebra with our arrays. This is fairly easy to do in Julia, and a lot of operators we expect from other programming languages are also found in Julia.
```
x = ones(3,3) 
y = rand(3,3) 
a = cat(1,x,y) #concatonate by rows
b = cat(2,x,y) #concatonate by columns
c = x+y #array addition
d = x*y #array multiplication
e = x/y # right array division
f = x\y # left array division
```





  

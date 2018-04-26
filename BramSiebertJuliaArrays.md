  # Bram Siebert 17179246
![Alt text](https://www.wilmott.com/wp-content/uploads/2017/02/jcl-logo-e1487133902152.png)
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
```julia
x = ones(3,3) 
y = rand(3,3) 
a = cat(1,x,y) #concatonate by rows
b = cat(2,x,y) #concatonate by columns
c = x+y #array addition
d = x*y #array multiplication
e = x/y # right array division
f = x\y # left array division
```
We can also do a lot of basic linear algebra operations in Julia, such as finding the trace, determinant or inverse of a matrix with:

```julia
trace(x)
det(x)
inv(x)

```
respectively. Of particular use is finding eigenvalues and eigenvestrs using the `eigvals(x)` and `eigvecs(x)` command. 

Julia has built-in support for sparse vectors and matrices, stored in the compressed sparse column format. A sparse matrix, in brief, changes the way a matrix is stored, so that zero entries get eliminated and thus use no memory or computing power. Implementing a sparse matrix is simple, we type `sparse` before we define the array. For example the code

```julia
x = sparse([1 0 0; 4 0 6; 0 8 0])
``` 
gives the output:
```julia
  [1, 1]  =  1
  [2, 1]  =  4
  [3, 2]  =  8
  [2, 3]  =  6
``` 
Most common commands for making an array (such as `zeros`, `ones`, and `eye`) are modified with the letter `sp` before the rest of the command, i.e:

```julia
spzeros(m,n)  #Creates a m-by-n matrix of zeros
spones(S)     #Creates a matrix filled with ones.
speye(n)      #Creates a n-by-n identity matrix.
```

We can also convert an array A to a sparse or full matrix by using `sparse(A)` or `full(A)` repectively.

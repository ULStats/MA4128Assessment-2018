![PageRank](http://www.webseoanalytics.com/blog/wp-content/uploads/2010/11/wikipedia-pagerank-nofollow-backlink.jpg)
 # Use of Power Iteration Method in Search Engines
***Sean O'Neill***     ***13155245***
---------------------------------
## Introduction
I became interested in this subject during my studies of dominant eigenvalues during my final year project.
In mathematics, power iteration (also known as the power method) is an eigenvalue algorithm: given a diagonalizable matrix ***A***, the algorithm will produce a number ***λ***, which is the greatest (in absolute value) eigenvalue of ***A***, and a nonzero vector ***v*** ,the corresponding eigenvector of ***λ***, such that ***Av=λv***. The algorithm is also known as the Von Mises iteration.
Power iteration is a very simple algorithm, but it may converge slowly. It does not compute a matrix decomposition, and hence it can be used when ***A*** is a very large sparse matrix.
## The Method 
The power iteration algorithm starts with a vector **b<sub>0</sub>**, which may be an approximation to the dominant eigenvector or a random vector. The method is described by the recurrence relation

![eq1](https://latex.codecogs.com/gif.latex?b_%7Bk&plus;1%7D%20%3D%20%5Cfrac%7BAb_%7Bk%7D%7D%7B%7C%7CAb_%7Bk%7D%7C%7C%7D)

So, at every iteration, the vector **b<sub>k</sub>** is multiplied by the matrix ***A*** and normalized.

If we assume ***A*** has an eigenvalue that is strictly greater in magnitude than its other eigenvalues and the starting vector **b<sub>0</sub>** has a nonzero component in the direction of an eigenvector associated with the dominant eigenvalue, then a subsequence **(b<sub>k</sub>)** converges to an eigenvector associated with the dominant eigenvalue.
Without the two assumptions above, the sequence **(b<sub>k</sub>)** does not necessarily converge. In this sequence,

![eq2](https://latex.codecogs.com/gif.latex?b_%7Bk%7D%3De%5E%7Bi%5Cphi_%7Bk%7D%7DV_1&plus;r_k)



where ![eq4](https://latex.codecogs.com/gif.latex?V_1) is an eigenvector associated with the dominant eigenvalue, and ![eq5](https://latex.codecogs.com/gif.latex?%7C%7Cr_%7Bk%7D%7C%7C%20%5Crightarrow%200). The presence of the term ![eq3](https://latex.codecogs.com/gif.latex?e%5E%7Bi%5Cphi_%7Bk%7D%7D) implies that **(b<sub>k</sub>)** does not converge unless ![eq6](https://latex.codecogs.com/gif.latex?e%5E%7Bi%5Cphi_%7Bk%7D%7D%3D1). Under the two assumptions listed above, the sequence ![eq7](https://latex.codecogs.com/gif.latex?%28%5Cmu_%7Bk%7D%29) defined by

![eq8](https://latex.codecogs.com/gif.latex?%5Cmu_%7Bk%7D%3D%5Cfrac%7Bb_%7Bk%7D%5E%7B*%7DAb_%7Bk%7D%7D%7Bb_%7Bk%7D%5E%7B*%7Db_%7Bk%7D%7D)

converges to the dominant eigenvalue.
One may compute this with the following algorithm (shown in Python with NumPy):
```
#!/usr/bin/python

import numpy as np


def power_iteration(A, num_simulations):
    # Ideally choose a random vector
    # To decrease the chance that our vector
    # Is orthogonal to the eigenvector
    b_k = np.random.rand(A.shape[0])

    for _ in range(num_simulations):
        # calculate the matrix-by-vector product Ab
        b_k1 = np.dot(A, b_k)

        # calculate the norm
        b_k1_norm = np.linalg.norm(b_k1)

        # re normalize the vector
        b_k = b_k1 / b_k1_norm

    return b_k

power_iteration(np.array([[0.5, 0.5], [0.2, 0.8]]), 10)
```

The vector **(b<sub>k</sub>)** to an associated eigenvector. Ideally, one should use the Rayleigh quotient in order to get the associated eigenvalue.
This algorithm is the one used to calculate such things as the Google PageRank.

The method can also be used to calculate the spectral radius (the largest eigenvalue of a matrix) by computing the Rayleigh quotient

![eq9](https://latex.codecogs.com/gif.latex?%5Cfrac%7Bb_%7Bk%7D%5E%7BT%7DAb_%7Bk%7D%7D%7Bb_%7Bk%7D%5E%7BT%7Db_%7Bk%7D%7D%20%3D%20%5Cfrac%7Bb_%7Bk&plus;1%7D%5E%7BT%7Db_%7Bk%7D%7D%7Bb_%7Bk%7D%5E%7BT%7Db_%7Bk%7D%7D).

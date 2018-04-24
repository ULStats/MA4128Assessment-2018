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

## PageRank Algorithm

![eq11](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/PageRanks-Example.svg/758px-PageRanks-Example.svg.png)

PageRank works by counting the number and quality of links to a page to determine a rough estimate of how important the website is. The underlying assumption is that more important websites are likely to receive more links from other websites. It is not the only algorithm used by Google to order search engine results, but it is the first algorithm that was used by the company, and it is the best-known.
PageRank is a link analysis algorithm and it assigns a numerical weighting to each element of a hyperlinked set of documents, such as the World Wide Web, with the purpose of "measuring" its relative importance within the set. The algorithm may be applied to any collection of entities with reciprocal quotations and references. The numerical weight that it assigns to any given element *E* is referred to as the PageRank of *E* and denoted by ![eq12](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7BPR%28E%29%7D). Other factors like Author Rank can contribute to the importance of an entity.
A PageRank results from a mathematical algorithm based on the webgraph, created by all World Wide Web pages as nodes and hyperlinks as edges, taking into consideration authority hubs such as cnn.com or usa.gov. The rank value indicates an importance of a particular page. A hyperlink to a page counts as a vote of support. The PageRank of a page is defined recursively and depends on the number and PageRank metric of all pages that link to it ("incoming links"). A page that is linked to by many pages with high PageRank receives a high rank itself.

## Simplified Algorithm
Assume a small universe of four web pages: **A, B, C and D**. Links from a page to itself are ignored. Multiple outbound links from one page to another page are treated as a single link. PageRank is initialized to the same value for all pages. In the original form of PageRank, the sum of PageRank over all pages was the total number of pages on the web at that time, so each page in this example would have an initial value of 1. However, later versions of PageRank, and the remainder of this section, assume a probability distribution between 0 and 1. Hence the initial value for each page in this example is 0.25.

The PageRank transferred from a given page to the targets of its outbound links upon the next iteration is divided equally among all outbound links.

If the only links in the system were from pages **B, C,** and **D** to **A**, each link would transfer 0.25 PageRank to **A** upon the next iteration, for a total of 0.75.

![eq13](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7BPR%28A%29%3DPR%28B%29&plus;PR%28C%29&plus;PR%28D%29%7D)

Suppose instead that page **B** had a link to pages **C** and **A**, page **C** had a link to page **A**, and page **D** had links to all three pages. Thus, upon the first iteration, page **B** would transfer half of its existing value, or 0.125, to page **A** and the other half, or 0.125, to page **C**. Page **C** would transfer all of its existing value, 0.25, to the only page it links to, **A**. Since **D** had three outbound links, it would transfer one third of its existing value, or approximately 0.083, to **A**. At the completion of this iteration, page **A** will have a PageRank of approximately 0.458.

![eq14](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7BPR%28A%29%3D%5Cfrac%7BPR%28B%29%7D%7B2%7D&plus;%5Cfrac%7BPR%28C%29%7D%7B1%7D&plus;%5Cfrac%7BPR%28D%29%7D%7B3%7D%7D)

In other words, the PageRank conferred by an outbound link is equal to the document's own PageRank score divided by the number of outbound links **L( )**.

![eq15](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7BPR%28A%29%3D%5Cfrac%7BPR%28B%29%7D%7BL%28B%29%7D&plus;%5Cfrac%7BPR%28C%29%7D%7BL%28C%29%7D&plus;%5Cfrac%7BPR%28D%29%7D%7BL%28D%29%7D%7D)

In the general case, the PageRank value for any page **u** can be expressed as:

![eq16](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7BPR%28u%29%3D%5Csum_%7Bv%5Cin%20B_%7Bu%7D%7D%20%5Cfrac%7BPR%28v%29%7D%7BL%28v%29%7D%7D)

i.e. the PageRank value for a page **u** is dependent on the PageRank values for each page **v** contained in the set **(B<sub>u</sub>)** (the set containing all pages linking to page **u**), divided by the number **L(v)** of links from page **v**.

![eq10](https://biziq.com/wp-content/uploads/PageRank-Illustration-700x394.png)


![s](https://www.abbreviations.com/images/187806_RQI.png)
## Introduction
Automatic milking is the milking of dairy animals, especially of dairy cattle, without human labour. Automatic milking systems (AMS), also called voluntary milking systems (VMS), were developed in the late 20th century. They have been commercially available since the early 1990s. The core of such systems that allows complete automation of the milking process is a type of agricultural robot. Automated milking is therefore also called robotic milking.Common systems rely on the use of computers and special herd management software.
## Algorithm
The algorithm is very similar to inverse iteration, but replaces the estimated eigenvalue at the end of each iteration with the Rayleigh quotient. Begin by choosing some value ![mu](https://latex.codecogs.com/gif.latex?%5Cmu_%7B0%7D) as an initial eigenvalue guess for the Hermitian matrix ***A*** An initial vector ![b0](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7Bb_%7B0%7D%7D) must also be supplied as initial eigenvector guess.

Calculate the next approximation of the eigenvector ![bi](https://latex.codecogs.com/gif.latex?%5Cboldsymbol%7Bb_%7Bi&plus;1%7D%7D) by 

![w](https://latex.codecogs.com/gif.latex?%7Bb_%7Bi&plus;1%7D%7D%3D%5Cfrac%7B%28A-%5Cmu_%7Bi%7DI%29%5E%7B-1%7Db_%7Bi%7D%7D%7B%5Cleft%20%5C%7C%20%28%29A-%5Cmu_%7Bi%7DI%29%5E%7B-1%7Db_%7Bi%7D%20%5Cright%20%5C%7C%27%7D)

where ***I*** is the identity matrix, and set the next approximation of the eigenvalue to the Rayleigh quotient of the current iteration equal to 

![Q](https://latex.codecogs.com/gif.latex?%5Cmu_i%20%3D%20%5Cfrac%7Bb%5E%7B*%7D_iAb_i%7D%7Bb%5E%7B*%7D_ib_i%7D)

To compute more than one eigenvalue, the algorithm can be combined with a deflation technique.

Note that for very small problems it is beneficial to replace the matrix inverse with the adjugate, which will yield the same iteration because it is equal to the inverse up to an irrelevant scale (the inverse of the determinant, specifically). The adjugate is easier to compute explicitly than the inverse (though the inverse is easier to apply to a vector for problems that aren't small), and is more numerically sound because it remains well defined as the eigenvalue converges.

## Octave Implementation
```
function x = rayleigh(A, epsilon, mu, x)
  
  x = x / norm(x);
 
 % the backslash operator in Octave solves a linear system
  
  y = (A - mu * eye(rows(A))) \ x; 
  
  lambda = y' * x;
 
 mu = mu + 1 / lambda
  
  err = norm(y - lambda * x) / norm(y)

 
 while err > epsilon
    
    x = y / norm(y);
   
   y = (A - mu * eye(rows(A))) \ x;
    
    lambda = y' * x;
    
    mu = mu + 1 / lambda
   
   err = norm(y - lambda * x) / norm(y)
  
  end
```

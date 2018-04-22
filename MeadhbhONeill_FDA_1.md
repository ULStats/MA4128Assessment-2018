__Functional Data Analysis__
===========================
***Meadhbh O'Neill**    13128159*

![fda logo](http://www.psych.mcgill.ca/misc/fda/images/index-fig1.jpg)

## Introduction

*Functional Data Analysis* (FDA) is about analysis of information on curves or functions that vary over a continuum. The analysis includes a collection of techniques to model data from dynamical systems.

Müller (2006) states that:

> Functional data is multivariate data with an ordering on the dimensions

As the analysis is completed on curves or functions, there is a key assumption of smoothness. The values occuring close to each other should be similar in some systematic way so the curves are intrinsically smooth. FDA is an extension of multivariate data analysis to functional data. Here FDA replaces actual observations by a simple functional representation. Functional models can be used for nonfunctional data. For example, data recorded at discrete time points can be represented as a continuous function. 

FDA addresses the main ways in which different curves vary. Information on the rates of change or derivatives of the curves is very useful. FDA is most optimal with high quality data. For example, data from monitoring equipment such as electrical or spectral measurements. Noisier and less frequent data can also be used.

The goals of FDA are essentially equivalent to those of any other branch of statistics. The aims and objectives are as follows:

* to represent the data in ways that aid further analysis
* to display the data so as to highlight various characteristics
* to study important sources of pattern and variation among the data
* to explain variation in an outcome or dependent variable by using input or independent variable information
* to compare two or more sets of data with respect to certain types of variation, where two sets of data can contain different sets of replicates of the same functions, or different functions for a common set of replicates.

## The first steps of functional data analysis

**1. Data representation: smoothing and interpolation**
   * Data measured at discrete time points may need to be converted to a continous time function. This process is *interpolation* if the discrete values are assumed to be errorless. If there is some observational error that needs to be removed, the conversion from discrete data to functions may involve *smoothing*.

**2. Data registration or feature alignment**
   * The data may have a process that starts arbitrarily in time. If this is the case, the records must be aligned by some shift of the time axis.

**3. Data display**
   * Displaying the results of a functional data analysis can be challenging. Different displays of data can illustrate different features of interest. The standard plot of *x(t)* against *t* is not necessarily the most informative. There are various ways of plotting the results which requires exploration.

**4. Plotting pairs of derivatives**
   * Relationships between derivative provides helpful clues regarding the processes driving the functional data. Plotting the second derivative or acceleration on the vertical axis against the first derivative or velocity on the horizontal axis result in a *phase plane plot*. The attention is focussed on the interaction between the first and second derivatives by eliminating the explicit role of the time argument. In addition to plotting curve values, plotting derivatives is a critical part of functional data analysis.
   
## _Example_

The heights of 10 girls were measured at a set of 31 ages in the Berkeley Growth Study (Tuddenham and Snyder, 1954). There are four measurements while the child is one year old, annual measurements from two to eight years, followed by biannual measurements. As a result, the ages are not equally spaced. Although each record involves only discrete values, these values result in a smooth variation in height. The data consists of a sample of 10 *functional* observations creating a height *function*.

The plot below depicts the heights of 10 girls measured at 31 ages. The circles indicate the unequally spaced ages of measurement.
![Plot1](https://github.com/oneill-m/MA4128/blob/master/ProjectFolder/plot1.PNG)


### Plotting Pairs of Derivatives: Phase-Plane Plots
Here the accelerations or second derivatives are plotted against their velocities or first derivatives. Each curve begins with strong positive velocity and negative acceleration in infancy. The middle of the pubertal growth spurt for each girl corresponds to the point where her velocity is maximised after early childhood. The circles denote the position of each girl at age 11.7, the average midpubertal age. The pubertal growth loop for each girl is entered usually after a cusp or small loop. The acceleration is positive for a while as the velocity increases until the acceleration drops again to zero. The large negative swing terminates near the origin where both velocity and acceleration vanish at the beginning of adulthood. There are several interesting features in this plot. Variability is greatest in early childhood. Why does the pubertal growth spurt show up as a loop? What information does the size of the loop convey? Obviously there must be a lot of information in how velocity and acceleration are linked together in human growth.

![Plot2](https://github.com/oneill-m/MA4128/blob/master/ProjectFolder/plot2.png)

#### *_References_*:

[Functional Data Analysis](https://ul-ie-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=353UOL_ALMA_DS2159088270003496&context=L&vid=353UOL_VU1&lang=en_US&search_scope=CSCOP_EVERYTHING&adaptor=Local%20Search%20Engine&isFrbr=true&tab=tab1&query=any,contains,functional%20data%20analysis&sortby=date&facet=frbrgroupid,include,12395434&offset=0)

[Functional Data Analysis with R and MATLAB](https://ul-ie-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=353UOL_ALMA_DS5161531120003496&context=L&vid=353UOL_VU1&lang=en_US&search_scope=CSCOP_EVERYTHING&adaptor=Local%20Search%20Engine&tab=tab1&query=any,contains,functional%20data%20analysis%20with%20R%20and%20MATLAB&offset=0)

[Properties of Principal Component Methods for Functional and Longitudinal Data Analysis](https://ul-ie-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_jstor_archive_125463465&context=PC&vid=353UOL_VU1&lang=en_US&search_scope=CSCOP_EVERYTHING&adaptor=primo_central_multiple_fe&tab=tab1&query=any,contains,Properties%20of%20principal%20component%20methods%20for%20functional%20and%20longitudinal%20data%20analysis.%20Ann.%20Statist.&offset=0)

## R Code taken from [Functional Data Analysis with R and MATLAB](https://ul-ie-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=353UOL_ALMA_DS5161531120003496&context=L&vid=353UOL_VU1&lang=en_US&search_scope=CSCOP_EVERYTHING&adaptor=Local%20Search%20Engine&tab=tab1&query=any,contains,functional%20data%20analysis%20with%20R%20and%20MATLAB&offset=0)
```R
install.packages("fda")
library(fda)
# -------------- The Berkeley growth data  --------------------------
age     = growth$age
age.rng = range(age)
agefine = seq(age.rng[1], age.rng[2], length=501)
children = 1:10
ncasef   = length(children)

# Monotone smooth 
gr.basis = create.bspline.basis(norder=6, breaks=growth$age)

# matrix of starting values for coefficients
cvecf           = matrix(0, gr.basis$nbasis, ncasef)
dimnames(cvecf) = list(gr.basis$names,
              dimnames(growth$hgtf)[[2]][children])
gr.fd0  = fd(cvecf, gr.basis)

# Create an initial functional parameter object
gr.Lfd    = 3
gr.lambda = 10^(-1.5)
gr.fdPar  = fdPar(gr.fd0, Lfdobj=gr.Lfd, lambda=gr.lambda)

#  Monotonically smooth the female data & plot
hgtfmonfd   = with(growth, smooth.monotone(age, hgtf[,children], gr.fdPar))

with(growth, matplot(age, hgtf[, children], pch='o', col=1,
                     xlab='Age (years)', ylab='Height (cm)',
                     ylim=c(60, 183)) )

hgtf.vec = predict(hgtfmonfd$yhatfd, agefine)
matlines(agefine, hgtf.vec, lty=1, col=1)

# -------------- Velocity vs. Acceleration  --------------------------
matplot(hgtf.vel, hgtf.acc, type='l', xlim=c(0, 12), ylim=c(-5, 2),
     xlab='Velocity (cm/yr)', ylab=expression(Acceleration (cm/yr^2)),
     las=1)
for(i in 1:10){
  points(hgtf.vel[i11.7, i], hgtf.acc[i11.7, i],pch='o')
}
abline(h=0, lty='dotted')
```

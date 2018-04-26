# Outlier Detection in R
14175266
*Seán Leahy*

## Background
Outliers in statistics are values which deviate largely from other observations in a given sample. Outliers can occur for a number of
reasons, including experimental error or random variation. Outliers in statistics, when not dealt with correctly can have detrimental
effect on the analysis.

## Application
One major reson outlier identification is important is when testing for normality of data. Tests  may falsely reject 
normality due to the presence of outliers in a sample. For this reason it is firstly important to graphically visualize the data to see if by inspection any outliers can be identified.

### Graphical Methods of Identifying Outliers
There are a few graphical plots which can be produced in R to identify outliers. Firstly there is the Box-Plot.
Below a box-plot of miles-per-gallon by car cylinders for the mtcars dataset.
![Car Box-Plot](https://github.com/ULStats/MA4128Assessment-2018/blob/ad2a2ba9e3b7f33a54d17d788ebec72671a7240b/Car%20Boxplot.png?raw=true)

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
#### Box-Plot
There are a few graphical plots which can be produced in R to identify outliers. Firstly there is the Box-Plot.
Below a box-plot of miles-per-gallon by car cylinders for the mtcars dataset.
![Car Box-Plot](https://github.com/ULStats/MA4128Assessment-2018/blob/ad2a2ba9e3b7f33a54d17d788ebec72671a7240b/Car%20Boxplot.png?raw=true)

The box plot displays the distribution of a sample, showing the interquartile range, median and where any outliers are.  It is possible to calculate which value will be deemed as outliers. Firstly quartiles need to be found, this involves listing the variables by increasing order. The median value is the (n+1)/2th value, while the lower and upper quartiles are given by (n+1)/4 and 3(n+1)/4, where n denotes the sample size.  Once quartiles are defined the interquartile range (IQR) is found by subtracting the lower quartile (Q1) from the upper quartile (Q3).
IQR= Q3 – Q1.
Outliers are then any values greater than Q3 + 1.5xIQR, or any values less than Q1 -1.5xIQR. Once outliers were identified they were taken into consideration while analyzing the data.
So from  the graph produced above it can be seen that there is one statistical outlier in the 8 cylinder category. 


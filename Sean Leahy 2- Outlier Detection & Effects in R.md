# Outlier Detection & Effects in R
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

### Effect of Outliers on Linear Models
Taking the cars dataset, and adding what would be considered outlier values for speed & distance, and ruinning a simple linear regression model was usesd to predict distance with speed. The first graph shows the regression line plotted with 5 outliers introduced to the data. 

![Regression with Outliers](https://github.com/ULStats/MA4128Assessment-2018/blob/6d319022c180840057308c7f2c7563a07e5c8f10/Regression%20with%20outliers.png?raw=true)

The regression line has a much higher slope ase the model is accounting for the values which are outliers.
Now looking at the regression line with the outlier values removed.

![Regression Without Outliers](https://github.com/ULStats/MA4128Assessment-2018/blob/6d319022c180840057308c7f2c7563a07e5c8f10/Regression%20without%20outliers.png?raw=true)

It is clear from this that the second regression line is a far better fit for the data, and will more accurately be able to estimate values. These outliers are know as Influential outliers, since their presence in the regression model significantly effects the results.

#### Formal Tests For Outliers
In R there is a command outlierTest() which can be used to identify outliers in a regression model. The outlierTest works as a hypothesis test, with null hypothesis being there are no outliers.
```
> mod1 <- lm(mpg ~ cyl + hp, data=mtcars )
> outlierTest(mod1)
No Studentized residuals with Bonferonni p < 0.05
Largest |rstudent|:
               rstudent unadjusted p-value Bonferonni p
Toyota Corolla 2.634327           0.013579      0.43453
```
Here the outlier test is being run on a linear regression model for the mtcars dataset. From this output it can be interpreted that there are no outliers in the model as the Bonferonni p-value is not low enough to reject the null. 

## Conclusions
Once outliers have been identified they must be dealt with. When using descriptive statistics to describe the central tendency of the data, median and IQR should be used as opposed to mean and standard deviation as outliers will not have an effect on the former. 
For a regression model, if a closer fit for data is desired, removing outliers from the model will allow for a better fitting model.


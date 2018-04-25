# Multivariate Imputation By  Chained Equations (MICE)
*Sean Leahy* 
14175266

## Background
Multiple Imputation is a statistical means of imputing or creating values for missing data. One of the most common problems encountered by statisticians an reaserchers is large amounts of missing data in surveying. As a remedy for this multiple imputation is used in order to gain a more comprehensive analysis of a given dataset. When creating predictive models it is very important that the imputed values are accurate and there is no bias. To help minimise the error in imputations the mice package allows values to be imputed m amount of times.

Before running the mice package one must identify if the missing data is either Missing at Random, Missing Completely at Random or Missing Not at Random.

## Preparation
Before MICE can be run  the package must be loaded into R.
```
install.packages("VIM")
install.packages("mice")
library(VIM)
library(mice)
```
VIM is used to create the plots of the missing data analysed using the MICE package.

### Missing Data Classifications

#### Missing Completely at Random:
Data which is missing completely at random is described as data which there is no pattern or observable reason for the absence of data. Any missing values are completely random and there is no relationship between the missing values and any other observed data in the dataset.

#### Missing at Random:
Data which is missing at Random is described as missing data which has some relationship to other observed data in the dataset. Missing values are not completely random and a contributing factor for these missing values can be observed.

#### Missing Not at Random:
Missing not at random data is described as data whose missingness depends on the unobserved data. The omission of this data has to do with the value of the missing data itself. 

When running the MICE package in r there is an assumption that the missing data is missing at random. If data is MNAR or MCAR this can lead to increased bias. 

## Visualisation of Missing Data Patterns
As part of the MICE package it is possible to visualise the missing data patterns. 
Using md.pattern() a table is created to display the observations with missing data as seen below.
In the given dataset (Eldermet), it was of interest to analyse the missing data patterns in the MMSE (mini mental state exam). Test were done at 3 time intervals and the missing data pattern was as follows:

 ![MMSE Missing Data Matrix](https://raw.githubusercontent.com/ULStats/MA4128Assessment-2018/ad8c623c08a1ec162278bdaa27ed030df446dfbb/MMSE%20Missing%20Data.PNG)

The following code then produced the images below whis atre a visual representation of the missing data patterns. The image on the left, labelled missing data, shows the proportion of values which are missing at each timepoint. The image on tthe right then displays the missing data pattern, where a column which is all blue represents data that is present at all three timepoints, with the proportion given below also. Cells which are coloured yellow then represent missing data. 
```
MMSE_mis <- aggr(NewMMSE, col=c('navyblue','yellow'),
                    numbers=TRUE, sortVars=TRUE,
                    labels=names(NewMMSE), cex.axis=.7,
                    gap=3, ylab=c("Missing data","Pattern"))
```
 ![MMSE Missin Data](https://raw.githubusercontent.com/ULStats/MA4128Assessment-2018/be3644704928b4947e2cbc3ab063c33c9a8803e6/MMSE%20Missing%20Data.png) 

## Methods of Imputation:
There are 4 methods of imputation used by MICE in R.
* PMM (Predictive Mean Matching)  – For numeric variables*
* logreg(Logistic Regression) – For Binary Variables( with 2 levels)
* polyreg(Bayesian polytomous regression) – For Factor Variables (>= 2 levels)
* Proportional odds model (ordered, >= 2 levels)


### Implementing MICE
To run the MICE programme in R the following code can be used.
```
Imputed_Weight <- mice(WeightImp, m=5, maxit = 50,method= "pmm",meth= meth,pred= pred, seed= 250695)
```
This runs the multiple imputations m=5 times, with a maximum number of iterations = 50, and since MMSE is a numeric variable, predictive mean matching is used as the method.

#### Using complete() function
```
completeSet <- complete(imputed_Data,1)
> summary(completeSet)
```
The above code creates a new data frame in which the imputed values from the 1st imputation are combined with the original values.

### Visualizing Imputed Data
Using the stripplot() function a visual representation of the imputed data can be seen. The values which have been imputed are in red while the original data is in blue. 
![Imputed Data](https://github.com/ULStats/MA4128Assessment-2018/blob/53377f54eb17eb7e8cbbbb0d5cfcd96c773faa39/Weight%20Imputations.png?raw=true)

### Analysis of Imputed Data
After the data has been immputed analysis can then be performed. Using the with() and pool() function models can be applied to the imputed data.
Using the following code the Imputations were performed, and a linear model was applied to the imputed data.
```
Imputed_Weight <- mice(WeightImp, m=5, maxit = 50,method= "pmm",meth= meth,pred= pred, seed= 250695)
fit <- with(Imputed_Weight, lm(WeightT6 ~ Weight + WeightT3 
                       + eldermet$Age +eldermet$Setting 
                       + eldermet$MMSE+ eldermet$GDT  ))
round(summary(pool(fit)),2)
```
The regression model can then be seen in the following output.
```
> round(summary(pool(fit)),2)
                   est   se     t     df Pr(>|t|)  lo 95 hi 95 nmis  fmi lambda
(Intercept)      -4.95 2.93 -1.69  68.46     0.10 -10.80  0.89   NA 0.23   0.21
Weight            0.33 0.12  2.62   4.97     0.05   0.01  0.65    1 0.89   0.86
WeightT3          0.68 0.12  5.43   5.11     0.00   0.36  0.99  198 0.88   0.85
eldermet$Age      0.06 0.03  2.02  48.78     0.05   0.00  0.12    0 0.29   0.26
eldermet$Setting -0.26 0.19 -1.36 157.62     0.18  -0.64  0.12    0 0.13   0.12
eldermet$MMSE     0.01 0.04  0.14  93.36     0.89  -0.08  0.09    0 0.19   0.17
eldermet$GDT     -0.06 0.18 -0.31   5.13     0.77  -0.51  0.40   60 0.88   0.84
```
This is a pooled result, as the regression coefficients are averaged over the 5 imputations. This is helpful fro data scientists/ statisticians as it is possible to get a more complete analysis of the dataset, since there are no missing values.

https://cran.r-project.org/web/packages/mice/README.html
www.stefvanbuuren.nl/mi/mi.html

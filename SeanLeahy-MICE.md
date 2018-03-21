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

## MICE Algorithm:
The manner in which the mice algorithm works is quite complex. One must be careful when running it such that the values imputed are statistically correct. To allow for more accurate imputation the method of chained equations was developed. Instead of imputing all of the values at once, the mice package imputes values separately for each variable. Univariate imputations are done in parallel and then pooled to generate a single imputed dataset.
It is an assumption of the MICE algorithm that the multivariate distribution of Y^j can be completely specified by θ, which is a vector of unknown parameters. The MICE algorithm obtains the posterior distribution of θ by sampling iteratively from conditional distributions of the form 
```math
P(Y_1 |Y_(-1),θ_1)
.
.
. 
P(Y_p |Y_(-p),θ_p)
``` 
Where Y_(-p) are the predictor variables for the given imputed data. The parameters θ_1,…,θ_p are unique to each of the individual conditional densities. Drawing from the observed marginal densities, the t^th iteration of chained equations draws:
```math
θ_1^((t))~ P(θ_1 |Y_1^obs,Y_2^((t-1) ),…,Y_p^((t-1))

Y_1^((t))~ P(Y_1 |Y_1^obs,Y_2^((t-1) ),…,Y_p^((t-1) ),θ_1^((t))
.
.
. 
θ_p^((t))~ P(θ_p |Y_p^obs,Y_1^((t-1) ),…,Y_(p-1)^((t))

Y_p^((t))~ P(Y_p |Y_p^obs,Y_1^((t-1) ),…,Y_p^((t) ),θ_p^((t))
```
Where Y_j^((t))is the j^th  value imputed at iteration t. 


### Implementing MICE
To run the MICE programme in R the following code can be used.
```
 imputed_Data <- mice(NewMMSE, m=5, maxit = 50, method = 'pmm', seed = 500)
```
This runs the multiple imputations m=5 times, with a maximum number of iterations = 50, and since MMSE is a numeric variable, predictive mean matching is used as the method.

#### Using complete() function
```
completeSet <- complete(imputed_Data,1)
> summary(completeSet)
```
The above code creates a new data frame in which the imputed values from the 1st imputation are combined with the original values.
From this the descriptive statistics can be seen.



https://cran.r-project.org/web/packages/mice/README.html
www.stefvanbuuren.nl/mi/mi.html

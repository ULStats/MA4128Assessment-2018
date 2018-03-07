# Multivariate Imputation By  Chained Equations (MICE)
*Sean Leahy* 
14175266

## Background
Multiple Imputation is a statistical means of imputing or creating values for missing data. One of the most common problems encountered by statisticians an reaserchers is large amounts of missing data in surveying. As a remedy for this multiple imputation is used in order to gain a more comprehensive analysis of a given dataset. When creating predictive models it is very important that the imputed values are accurate and there is no bias. To help minimise the error in imputations the mice package allows values to be imputed m amount of times.

Before running the mice package one must identify if the missing data is either Missing at Random, Missing Completely at Random or Missing Not at Random.

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







https://cran.r-project.org/web/packages/mice/README.html
www.stefvanbuuren.nl/mi/mi.html

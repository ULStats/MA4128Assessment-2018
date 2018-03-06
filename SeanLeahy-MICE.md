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

## Methods of Imputation:
There are 4 methods of imputation used by MICE in R.
* PMM (Predictive Mean Matching)  – For numeric variables*
* logreg(Logistic Regression) – For Binary Variables( with 2 levels)
* polyreg(Bayesian polytomous regression) – For Factor Variables (>= 2 levels)
* Proportional odds model (ordered, >= 2 levels)







https://cran.r-project.org/web/packages/mice/README.html
www.stefvanbuuren.nl/mi/mi.html

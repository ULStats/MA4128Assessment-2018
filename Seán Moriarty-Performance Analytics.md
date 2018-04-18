Performance Analytics
====================
## Description
PerformanceAnalytics provides an R package of econometric functions for performance and risk analysis of financial instruments or portfolios. This package aims to aid practitioners and researchers in using the latest research for analysis of both normally and non-normally distributed return streams. This package was created to include functionality that has been appearing in the academic literature on performance analysis and risk over the past several years, but had no functional equivalent in R. In general, this package requires return (rather than price) data. Almost all of the functions will work with any periodicity, from annual, monthly, daily, to even minutes and seconds, either regular or irregular. 

## Time Series Data
Not all, but many of the measures in this package require time series data. PerformanceAnalytics uses the 'xts' package for managing time series data for several reasons. Besides being fast and efficient, 'xts' includes functions that test the data for periodicity and draw attractive and readable time-based axes on charts. Another benefit is that 'xts' provides compatability with Rmetrics’ timeSeries, zoo and other time series classes, such that PerformanceAnalytics functions that return a time series will return the results in the same format as the object that was passed in. I myself have used this package in another project for a time series module and found it very useful.

## Performence Analysis
With the the increasing availability of complicated alternative investment strategies to both retail and institutional investors, and the broad availability of financial data, an engaging debate about performance analysis and evaluation is as important as ever. There won’t be one right answer delivered in these metrics and charts. What there will be is an accretion of evidence, organized to assist a decision maker in answering a specific question that is pertinent to the decision at hand. Using such tools to uncover information and ask better questions will, in turn, create a more informed investor.

Performance measurement starts with returns. The more informed a trader is the better once they can utilise this information. Basic measures of performance tend to treat returns as independent observations. In this case, the entirety of R’s base is applicable to such analysis. Some basic statistics we have collected in table.Stats include:
`
mean arithmetic mean\\
mean.geometric %geometric mean\\
mean.stderr %standard error of the mean (S.E. mean)\\
mean.LCL %lower confidence level (LCL) of the mean\\
mean.UCL %upper confidence level (UCL) of the mean\\
quantile %for calculating various quantiles of the distribution\\
min %minimum return\\
max %maximum return\\
range %range of returns\\
length(R) %number of observations\\
sum(is.na(R)) %number of NA’s
`

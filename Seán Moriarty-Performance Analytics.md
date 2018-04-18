Performance Analytics
====================
## Description
PerformanceAnalytics provides an R package of econometric functions for performance and risk analysis of financial instruments or portfolios. This package aims to aid practitioners and researchers in using the latest research for analysis of both normally and non-normally distributed return streams. This package was created to include functionality that has been appearing in the academic literature on performance analysis and risk over the past several years, but had no functional equivalent in R. In general, this package requires return (rather than price) data. Almost all of the functions will work with any periodicity, from annual, monthly, daily, to even minutes and seconds, either regular or irregular. 

## Time Series Data
Not all, but many of the measures in this package require time series data. PerformanceAnalytics
uses the xts package for managing time series data for several reasons. Besides being fast and
efficient, xts includes functions that test the data for periodicity and draw attractive and readable
time-based axes on charts. Another benefit is that xts provides compatability with Rmetrics’
timeSeries, zoo and other time series classes, such that PerformanceAnalytics functions that
return a time series will return the results in the same format as the object that was passed in

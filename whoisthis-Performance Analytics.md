Performance Analytics
====================
Not all, but many of the measures in this package require time series data. PerformanceAnalytics
uses the xts package for managing time series data for several reasons. Besides being fast and
efficient, xts includes functions that test the data for periodicity and draw attractive and readable
time-based axes on charts. Another benefit is that xts provides compatability with Rmetrics’
timeSeries, zoo and other time series classes, such that PerformanceAnalytics functions that
return a time series will return the results in the same format as the object that was passed in

Forecasting with ARIMA in R.
==================





## Objectives
The reader can expect to learn how to:

* Plot, examine, and prepare series for modeling
* Extract the seasonality component from the time series
* Test for stationarity and apply appropriate transformations
* Choose the order of an ARIMA model
* Forecast the series


## Method
1.Examine your data
* Plot the data and examine its patterns and irregularities
* Clean up any outliers or missing values if needed
* tsclean() is a convenient method for outlier removal and inputing missing values
* Take a logarithm of a series to help stabilize a strong growth trend
2.Decompose your data
* Does the series appear to have trends or seasonality?
* Use decompose() or stl() to examine and possibly remove components of the series
2.Stationarity
* Is the series stationary?
* Use adf.test(), ACF, PACF plots to determine order of differencing needed
3.Autocorrelations and choosing model order
* Choose order of the ARIMA by examining ACF and PACF plots
4.Fit an ARIMA model
5.Evaluate and iterate
* Check residuals, which should haven no patterns and be normally distributed
* If there are visible patterns or bias, plot ACF/PACF. Are any additional order parameters needed?
* Refit model if needed. Compare model errors and fit criteria such as AIC or BIC.
*C alculate forecast using the chosen model





***Luke O'Halloran***

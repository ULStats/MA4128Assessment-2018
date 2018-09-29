Forecasting
===========

Forecasting involves extrapolating a fitted model into the future by evaluating the model function over a given range of 
observations in time. The main problem is that the trends present in the fitted series may change in the future. Therefore it
may be more appropriate to think of a forecast as an expected value conditional on past trends continuing in the future.

Automatic forecasts of large numbers of time series data are often needed in economics and finance. In these circumstances, an automatic forecasting algorithm is an essential tool. Automatic forecasting algorithms must determine an appropriate time series model, estimate the parameters and compute the forecasts. They must be robust to unusual time series patterns, and applicable to large numbers of data without user intervention. The most popular automatic forecasting algorithms are based on either exponential smoothing or ARIMA models.

Forecasting methods can be of particular use in the field of economics for example. It's conceivable that time-series analysis
can be a somewhat useful tool to generate forecasts for the exchange rate, to take a particular example. Based on historical data we can attempt to identify underlying trends in the movements of exchange rates and attempt to predict future values based on such analysis. A particular branch of time-series analysis that may fit this context would be Smoothing Models, more specifically Exponential Smoothing Models. Exponential Smoothing assigns a decreasing weight to observations as they get older. Therefore more recent observations are assigned a greater importance compared to older observations. Which with respect to exchange rates would seem to be intuitive as current fluctuations in the market would take precedent over much more dated movements. The smoothing technique can have the effect of reducing seemingly random variationin data collected, thus revealing the underlying trend in the data with more clarity.

Exponential Smoothing removes most of the 'jaggedness' of the data, but still manages to follow the trend of the data - provided such a trend exists. It can be noticed that the smoothed forecast line tends to be lower than the original average line through the data. This is known as the 'trend lag' and is a side effect of the smoothing process. Anytime smoothing is used when a trend is present, the forcast will lag behind the trend.

Exponential Smoothing is probably the most widely used class of procedures for smoothing discrete time series data in order to forecast the future. This popularity can be attributed to its simplicity, computational efficiency, the ease of adjusting to changes in the forecasting process, and its reasonable accuracy. The most basic form of exponential smoothing is known as Simple Exponential Smoothing and is given by the below formula. This method is used when the data exhibits neither cyclical variation nor pronounced trends.

```
s(t) = (alpha)*x(t) + (1-alpha)*s(t-1)
```
* s(t) is the current smoothed valued (the forecast)
* x(t) is the current observation
* s(t-1) is the previous smoothed value (previous forecast)
* alpha is the smoothing parameter which assigns a weight to different observations

Values of alpha close to 1 have less of a smoothing effect and give greater weight to recent data observations, while values of alpha
closer to 0 have a greater smoothing effect and are less responsive to recent changes. There is no formally correct procedure for
choosing alpha. However, a robust way to obtain values for the unknown parameter is to estimate it from the observed data.The above refers to Simple Exponential Smoothing (SES). However there exist other types of smoothing models directly related to the
assumptions of SES. With SES, just the data itself (base demand) is being smoothed but with double-exponential smoothing the base
demand is being smoothed plus the underlying trend, and with triple-exponential smoothing base demand is being smoothed plus the trend
plus the seasonality.

For every exponential smoothing method we also need to choose the value for the smoothing parameters. For simple exponential smoothing, there is only one smoothing parameter (α), but for the previously mentioned methods there are more than one smoothing parameter. To estimate alpha for SES the HoltWinters() function can be used in R. Note however that this method only works for data with no trend or seasonality. To use HoltWinters() for SES, the parameters beta and gamma need to be set as FALSE. These parameters relate to double and triple exponential smoothing as will be shown below. The HoltWinters() function just makes forecasts for the time period covered by the original data, forecasts can be made for further time points by using the “forecast.HoltWinters()” function also in the R forecast package.

Regarding Double Exponential Smoothing, the model is controlled by two parameters, alpha, as shown before, and beta for the estimate of the slope of the model, otherwise called the trend component.As with simple exponential smoothing, the parameters alpha and beta have values between 0 and 1, and values that are close to 0 mean that little weight is placed on the most recent observations when making forecasts of future values. The model then calculates the values for alpha and beta in much the same way as for SES. Similarly for Triple Exponential Smoothing we can just let the model calculate alpha, beta and now gamma.

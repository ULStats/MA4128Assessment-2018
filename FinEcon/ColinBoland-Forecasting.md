Forecasting with R :airplane:
==================
***by Colin Boland - 12032875***

![Aero](https://github.com/ULStats/MA4128Assessment-2018/blob/master/air.jpg)

# Introduction

Many phenomena in our day-to-day lives, such as the movement of airline traffic, are measured in intervals over a period of time. Time series analysis methods are extremely useful for analyzing these special data types. 

# What is a forecasting model in Time Series?

Forecasting involves predicting values for a variable using its historical data points or it can also involve predicting the change in one variable given the change in the value of another variable. Forecasting approaches are primarily categorized into qualitative forecasting and quantitative forecasting. Time series forecasting falls under the category of quantitative forecasting wherein statistical principals and concepts are applied to a given historical data of a variable to forecast the future values of the same variable. Some time series forecasting techniques used include:
  - Autoregressive Models (AR)
  - Moving Average Models (MA)
  - Seasonal Regression Models
  - Distributed Lags Models
  
![Aero2](https://github.com/ULStats/MA4128Assessment-2018/blob/master/airline_passengers.png)

# What is Autoregressive Integrated Moving Average (ARIMA)?
ARIMA stands for Autoregressive Integrated Moving Average. ARIMA is also known as Box-Jenkins approach. Box and Jenkins claimed that non-stationary data can be made stationary by differencing the series in order to remove trend without actually assuming a trend model.

The ARIMA model combines three basic methods:

  * AutoRegression (AR) – In auto-regression the values of a given time series data are regressed on their own lagged values, which is indicated by the “p” value in the model.
  * Differencing or Integration (I) – This involves differencing the time series data to remove the trend and convert a non-stationary time series to a stationary one. This is indicated by the “d” in the model with the value indicating how many times the series has been differenced. 
  * Moving Average (MA) – The moving average nature of the model is represented by the “q” value which is the number of lagged values of the error term.
This model is called Autoregressive Integrated Moving Average or ARIMA(p,d,q) of Yt.  We will follow the steps enumerated below to build our model.

### Step 1: Testing and Ensuring Stationarity

To model a time series with the Box-Jenkins approach, the series has to be stationary. A stationary time series means a time series without trend, one having a constant mean and variance over time, which makes it easy for predicting values.

**Testing for stationarity** – We test for stationarity using the Augmented Dickey-Fuller unit root test. The p-value resulting from the ADF test has to be less than 0.05 or 5% for a time series to be stationary. If the p-value is greater than 0.05 or 5%, you conclude that the time series has a unit root which means that it is a non-stationary process.

**Differencing** – To convert a non-stationary process to a stationary process, we apply the differencing method. Differencing a time series means finding the differences between consecutive values of a time series data. The differenced values form a new time series dataset which can be tested to uncover new correlations or other interesting statistical properties.

We can apply the differencing method consecutively more than once, giving rise to the “first differences”, “second order differences”, etc.

We apply the appropriate differencing order (d) to make a time series stationary before we can proceed to the next step.

### Step 2: Identification of p and q

In this step, we identify the appropriate order of Autoregressive (AR) and Moving average (MA) processes by using the Autocorrelation function (ACF) and Partial Autocorrelation function (PACF).  

#### Identifying the p order of AR model

For AR models, the ACF will dampen exponentially and the PACF will be used to identify the order (p) of the AR model. If we have one significant spike at lag 1 on the PACF, then we have an AR model of the order 1, i.e. AR(1). If we have significant spikes at lag 1, 2, and 3 on the PACF, then we have an AR model of the order 3, i.e. AR(3).

#### Identifying the q order of MA model

For MA models, the PACF will dampen exponentially and the ACF plot will be used to identify the order of the MA process. If we have one significant spike at lag 1 on the ACF, then we have an MA model of the order 1, i.e. MA(1). If we have significant spikes at lag 1, 2, and 3 on the ACF, then we have an MA model of the order 3, i.e. MA(3).

#### Step 3: Estimation and Forecasting

Once we have determined the parameters (p,d,q) we estimate the accuracy of the ARIMA model on a training data set and then use the fitted model to forecast the values of the test data set using a forecasting function. In the end, we cross check whether our forecasted values are in line with the actual values.

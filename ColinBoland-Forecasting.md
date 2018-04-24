__Forecasting with R__ 
===================================
***by Colin Boland - 12032875***

![Image of Time Seires]
(http://www.kovcomp.co.uk/support/XL-Tut/images/hw1.gif)

## What is a forecasting model in Time Series?

Forecasting involves predicting values for a variable using its historical data points or it can also involve predicting the change in one variable given the change in the value of another variable. Forecasting approaches are primarily categorized into qualitative forecasting and quantitative forecasting. Time series forecasting falls under the category of quantitative forecasting wherein statistical principals and concepts are applied to a given historical data of a variable to forecast the future values of the same variable. Some time series forecasting techniques used include:
  - Autoregressive Models (AR)
  - Moving Average Models (MA)
  - Seasonal Regression Models
  - Distributed Lags Models

## What is Autoregressive Integrated Moving Average (ARIMA)?
ARIMA stands for Autoregressive Integrated Moving Average. ARIMA is also known as Box-Jenkins approach. Box and Jenkins claimed that non-stationary data can be made stationary by differencing the series, Yt. The general model for Yt is written as,

$$
\begin{equation}
Y_t =\phi_1Y_{t−1} +\phi_2Y_{t−2}…\phi_pY_{t−p} +\eps_t + \theta_1\eps_{t−1}+ \theta_2\eps_{t−2} +…\theta_q\eps_{t−q}]
\end{equation}
$$

Where, Yt is the differenced time series value, ϕ and θ are unknown parameters and ϵ are independent identically distributed error terms with zero mean. Here, Yt is expressed in terms of its past values and the current and past values of error terms.

The ARIMA model combines three basic methods:

AutoRegression (AR) – In auto-regression the values of a given time series data are regressed on their own lagged values, which is indicated by the “p” value in the model.
Differencing (I-for Integrated) – This involves differencing the time series data to remove the trend and convert a non-stationary time series to a stationary one. This is indicated by the “d” value in the model. If d = 1, it looks at the difference between two time series entries, if d = 2 it looks at the differences of the differences obtained at d =1, and so forth.
Moving Average (MA) – The moving average nature of the model is represented by the “q” value which is the number of lagged values of the error term.
This model is called Autoregressive Integrated Moving Average or ARIMA(p,d,q) of Yt.  We will follow the steps enumerated below to build our model.

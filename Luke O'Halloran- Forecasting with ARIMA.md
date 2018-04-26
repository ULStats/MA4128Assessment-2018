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
#### 1.Examine your data and plot
* Plot the data and examine its patterns and irregularities
* Clean up any outliers or missing values if needed
* `tsclean()` is a convenient method for outlier removal and inputing missing values
* Take a logarithm of a series to help stabilize a strong growth trend
#### 2.Decompose your data.¨
* Does the series appear to have trends or seasonality?
* Use `decompose()` or `stl()` to examine and possibly remove components of the series
#### 3.Stationarity
* Is the series stationary?
* Use `adf.test()`, ACF, PACF plots to determine order of differencing needed
#### 4.Autocorrelations and choosing model order
* Choose order of the ARIMA by examining ACF and PACF plots
#### 5.Fit an ARIMA model
#### 6.Evaluate and iterate
* Check residuals, which should haven no patterns and be normally distributed
* If there are visible patterns or bias, plot ACF/PACF. Are any additional order parameters needed?
* Refit model if needed. Compare model errors and fit criteria such as AIC or BIC.
* Calculate forecast using the chosen model

## Example 
* The data used in this example is U.S. airlines: monthly aircraft miles flown (Millions) 1963 -1970.
#### Load data set in R.
```
install.packages("TSA")
library(TSA)
setwd("/Users/lukeohalloran/Desktop/TimeSeries")
airline <- read.csv("us-airlines-monthly-aircraft-mil.csv",header = T)
plot(airline1)
#original data
xold<- ts(airline1$U.S..airlines..monthly.aircraft.miles.flown..Millions..1963..1970, freq=12, start = c(1963,1), end = c(1970,12))
#1 year removed
xnew<- ts(airline$U.S..airlines..monthly.aircraft.miles.flown..Millions..1963..1970, freq=12, start = c(1963,1), end = c(1969,12))
plot(xnew)
plot(xold, ylab="Miles Flown")
```
##### Decompose the data and Seasonally differencing.
Decomposing a time series means separating it into it’s constituent components. 
These components are as follows:
* Seasonal: Patterns that repeat with a fixed period of time. We see this in our data with a seasonality of 1 year.
* Trend: The underlying trend. We see this in our series as the number of miles flown grows each year.
* Random: This is the residuals of the original time series after the seasonal and trend series are removed.

```
####Decompose data
decom <- decompose(xnew) 
BC <-BoxCox.ar(xnew, lambda=seq(-2,2,0.1) ) 
#season diff
xlog <- log(xnew)
seasondiff<-diff(xlog,lag=12,diff=1)
plot(diff(xlog))
acf(seasondiff, lag.max = 40)
```
#### Test Stationarity
Fitting an ARIMA model requires the series to be stationary. A series is said to be stationary when its mean, variance, and autocovariance are time invariant.
The augmented Dickey-Fuller (ADF) test is a formal statistical test for stationarity. The null hypothesis assumes that the series is non-stationary. The ADF procedure tests whether the change in Y can be explained by a lagged value and a linear trend. If contribution of the lagged value to the change in Y is non-significant and there is a presence of a trend component, the series is non-stationary and null hypothesis will not be rejected.
```
#dickey fuller
adf.test(seasondiff)
```
#### Diffrence the data.
```
#diff
diffseasondiff <- diff(seasondiff)
adf.test(diffseasondiff)
plot(diffseasondiff, ylab= "Logged Stationary Series")
```

#### Picking model using acf, pacf and eacf.
```
#acf, pacf and eacf
acf(diffseasondiff, main= "acf", lag.max = 50)
pacf(diffseasondiff, main= "pacf", lag.max = 50)
eacf(diffseasondiff)
```

#### Model fitting using residuals
```
model <- arima(xlog, order=c(0,1,2), seasonal = list(order=c(0,1,1), period=12))
model

resid <- rstandard(model)
fit <- fitted(model)

dev.new(width=8, height=4)

hist(resid, main="Histogram of Residuals", xlab="Residuals")
qqnorm(resid, main="Normal Q-Q Plot of Residuals"); qqline(resid);
shapiro.test(resid)

plot(as.vector(fit), as.vector(resid), main="Fitted Versus Residuals",
     xlab="Fitted Values", ylab="Residuals" )

plot(resid, main="Residuals", ylab="Residuals", type="o")

acf(resid, main="ACF of Residuals")

LB.test(model, lag=5)
LB.test(model, lag=10)
LB.test(model, lag=15)

runs(resid)

LBpvals <- rep(NA, 15)

for(i in 5:15){
  LBpvals[i] <- LB.test(model, lag=i)$p.value
}

LBpvals

plot(LBpvals, ylim=c(0,1), main="P-Values from Ljung-Box Test",
     ylab="P-Values", xlab="Lag")
abline(h=0.05, lty=2)


dev.new(width=7, height=7)
tsdiag(model)
```
#### Forecasting the selected model.
```
forecast <- plot(model,n.ahead=12,type="l", col='red', ylab = "Miles Flown")              
lines(xoldlog, col="blue") 
```


***Luke O'Halloran***

Box Jenkins Approach
=======================
***Stephen Dalton (14161567)***

## Introduction

In time series analysis the Box-Jenkins approach applies Autoregressive moving average (ARMA) models,
or Autoregressive Integrated Moving Average (ARIMA) Models to find a model of best fit to a Time Series.
It is commonly used to model and forecast hydrological patterns, weather patterns among other time series.
The Box Jenkins ARIMA (p,d,q) model is made up of three seperate models.
(AR) Autoregressive model: specifies that the output variable depends linearly on its own previous values (p)
(I)  Accounts for level of differencing                                                                   (d)
(MA) Moving Average: specifies that the output variable depends on its own previous error terms           (q)

The Box Jenkins Approach can be broken into three stages 
1) Model Identification
2) Fitting
3) Checking 


## Model Identification

The Box Jenkins approach assumes stationarity. Stationarity means that the probability rules governing
the process do not depend on time, i.e., they do not depend on t.
Non-Stationarity can usually be detected visually simply by looking at the time series or a plot of the ACF

There is two main reasons that a time series may be non stationary.
1) Non Constant Variance.
2) Presence of a trend

1) Non Constant Variance can usually be handled by performing a Box Cox transformation
   This involves applying a function to the time series such a log transformation.
   
2) The presence of a trend can be eliminated by choosing the order of differencing applied to the series.

An Augmented Dicky Fuller (ADF) Test can be used to test for stationarity. 

A series decomposition may be applied to test whether a series is made up of mainly a 
1) Trend Component
2) Seasonal Component
3) Random Component (Noise)

Trend components can be eliminated as mentioned above by differencing. The ADF test however only tests for non seasonal
stationarity. As the Box Jenkins approach is commonly used to model seasonal time series. The presence of a seasonal
trend must also be eliminated. Once the series has been transformed/differenced/seasonally differenced or a combination 
of these tools to become stationary, the process may move forward.

*ARIMA models

Now that the level of differencing or (d) is known, it is now the objective to find both the p and q terms in the ARIMA model.

These can be found visually by looking at the ACF and partial ACF (PACF) of the new series
If the ACF decays and the PACF cuts off after a certain lag, an MA model is needed
If the ACF cuts off after a certain lag and the PACF decays, we use a AR model
If both decay we use an ARMA model. 
An extended ACF (EACF) and an ARMA subsets model can be also used to suggest values for p and q 

## Model Fitting

Once a few different values for p and q have been suggested, the models can be fitted to the series.
Assuming all suggested models have been differenced the same number of times a value to distinguish 
the best models is the AIC term. The lower the AIC term the best.

When the model with the lowest AIC is chosen. Tests must be carried out on the residuals to test for the validity of the model.

A histogram of normalised residuals can show if the residuals are normally distributed. 
A Shapiro Wilks Test can also test statistically for this.
A QQ plot can show whether the variance of the residuals is constant 

Other tests such as a ACF test on residuals can test if residuals are correlated with eachother or are white noise (random).
The Ljung Box tests at the 95% level whether these residuals are white noise.

*Overfitting

One of the main assumptions of the Box Jenkins approach is that it obeys the law of Parsimony. That is finding the
simplest model with the most explanatory power.

As a result the model must be tested for overfitting. Does a model have as much explanatory power as the original
model but using less parameters.

## Prediction

Once a final model has been chosen, the final stage is to use the model to predict future values of the time series. 



![Forecast](
https://github.com/ULStats/MA4128Assessment-2018/blob/master/River%20discharge%20Forescating.%20SD.JPG).md








Example of code used 

#######Entering Data into R###########

setwd('E:\\Time Series')

getwd()
install.packages("TSA")
library(TSA)

River <-read.csv("pigeonriver.csv", header=T) 

RiverTS <- ts(River ,freq=12, start=c(1924,1))

dev.new(width=8, height=5)

plot(RiverTS ,type="l", 
main= "Monthly riverflow Pigeon River 1924 – 1977",
ylab='flow in m/second', xlab='Time') 

###########Removing 10% of Data RiverTS

x90<- head(RiverTS,-64)    
RiverTS90 <- ts(x90,freq=12, start=c(1924,1)) 
length(RiverTS)
RiverTS90

plot(RiverTS90)
length(RiverTS90)

############# Validity of ARIMA


acf(RiverTS90)
acf(diff(RiverTS90))


############# Model Identification

plot(RiverTS90, type="l", main="Monthly riverflow Pigeon River 1924 – 1971" , ylab='Flow in m/second', xlab='Time')


BCRivers <- BoxCox.ar(RiverTS90, lamda=seq(-2,2,0.05))
BCRivers$mle

TransRiv <- (RiverTS90^0.1)

adf.test(RiverTS90)
acf(RiverTS90, lag.max=500)
pacf(RiverTS90)

Riversubs<-armasubsets(RiverTS90,nar=12,nma=12)
Riversubs
plot(Riversubs)

eacf(RiverTS90)

Riverdecomp <- decompose(RiverTS90)
plot(Riverdecomp)
diff(range(RiverTS90))
diff(range(Riverdecomp$trend,na.rm=T))
diff(range(Riverdecomp$seasonal,na.rm=T))
diff(range(Riverdecomp$random,na.rm=T))

data(RiverTS90)

months <- season(RiverTS90)

modelseason <- lm(RiverTS90 ~ 0 + months)  
# effect for each month
summary(modelseason)

Riv <- diff(RiverTS90,lag=12)
Rivdecomp <- decompose(Riv)
plot(Rivdecomp)
diff(range(Riv))
diff(range(Rivdecomp$trend,na.rm=T))
diff(range(Rivdecomp$seasonal,na.rm=T))
diff(range(Rivdecomp$random,na.rm=T))

acf(Riv)

cor(y=RiverTS,x=zlag(RiverTS90,d=1), use="pairwise")
cor(y=RiverTS,x=zlag(RiverTS90,d=36), use="pairwise")





pacf(Riv)


Rivsubs<-armasubsets(Riv,nar=12,nma=12)
Rivsubs
plot(Rivsubs)

eacf(Riv)

############## Model Fitting


RivMod1 <- arima(RiverTS90, order=c(0,0,0), seasonal=list(order=c(1,1,3),period=12))
RivMod1				4273.86
tsdiag(RivMod1)


RivMod2 <- arima(RiverTS90, order=c(0,0,0), seasonal=list(order=c(1,1,1),period=12))
RivMod2				4276.33
tsdiag(RivMod2)

RivMod3 <- arima(RiverTS90, order=c(0,0,0), seasonal=list(order=c(0,1,1),period=12))
RivMod3				4275.2
tsdiag(RivMod3)



RivMod4 <- arima(RiverTS90, order=c(3,0,0), seasonal=list(order=c(0,1,3),period=12))
RivMod4				4226.52
tsdiag(RivMod4)

resid<- rstandard(RivMod4)
dev.new(width=8, height=4)
hist(resid)
qqnorm(resid);qqline(resid);shapiro.test(resid)
fit <- fitted(RivMod4)
plot(as.vector(fit), as.vector(resid))
acf(resid)




RivMod5 <- arima(RiverTS90, order=c(3,0,0), seasonal=list(order=c(1,1,1),period=12))
RivMod5				4225.97
tsdiag(RivMod5)

resid<- rstandard(RivMod5)
dev.new(width=8, height=4)
hist(resid)
qqnorm(resid);qqline(resid);shapiro.test(resid)
fit <- fitted(RivMod5)
plot(as.vector(fit), as.vector(resid))
acf(resid)
runs(resid) 
plot(resid)



RivMod6 <- arima(RiverTS90, order=c(0,0,1), seasonal=list(order=c(0,1,3),period=12))
RivMod6				4226.62
tsdiag(RivMod6)
resid<- rstandard(RivMod6)
dev.new(width=8, height=4)
hist(resid)
qqnorm(resid);qqline(resid);shapiro.test(resid)
fit <- fitted(RivMod6)
plot(as.vector(fit), as.vector(resid))
acf(resid)



RivMod7 <- arima(RiverTS90, order=c(0,0,1), seasonal=list(order=c(1,1,1),period=12))
RivMod7				4225.59
tsdiag(RivMod7)

resid<- rstandard(RivMod7)
dev.new(width=8, height=4)
hist(resid)
qqnorm(resid);qqline(resid);shapiro.test(resid)
fit <- fitted(RivMod7)
plot(as.vector(fit), as.vector(resid))
acf(resid)
runs(resid) 
plot(resid)



##########Overfitting

RivMod8 <- arima(RiverTS90, order=c(3,0,0), seasonal=list(order=c(2,1,1),period=12))
RivMod8				4225.99
tsdiag(RivMod8)

resid<- rstandard(RivMod8)
dev.new(width=8, height=4)
hist(resid)
qqnorm(resid);qqline(resid);shapiro.test(resid)
fit <- fitted(RivMod8)
plot(as.vector(fit), as.vector(resid))
acf(resid)
runs(resid) 
plot(resid)


RivMod9 <- arima(RiverTS90, order=c(4,0,0), seasonal=list(order=c(1,1,1),period=12))
RivMod9				4195.18
tsdiag(RivMod9)


RivMod9 <- arima(RiverTS90, order=c(3,0,0), seasonal=list(order=c(1,1,2),period=12))
RivMod9				4195.66
tsdiag(RivMod9)



############## Prediction

install.packages("forecast")
library(forecast)

 ARIMA (3,0,0) x (1,1,1)12 vs Final 10% of the Riverflow Time Series.

	x10<- tail(RiverTS,64)                                                    		      
	RiverTS10<- ts(x10,freq=12, start=c(1971,1))                      		     
	length(RiverTS10)                                                                		      
	RiverTS10

	dev.new(width=8, height=4.5)                                                    
	plot(RivMod4 ,n.ahead=64,type="l", col='red')          			     
	lines(RiverTS10, col="blue")                                                 			    
	lines(RiverTS90,type="p",col="blue")                 									 
    lines(RiverTS90,type="l",col="blue")														
	dev.new(width=8, height=4.5)                                                   
	plot(RivMod4,n1=1970,type="b", n.ahead=64, col='red')      
	lines(RiverTS10, col="blue")                                                             
	lines(RiverTS90,type="p",col="blue")												   
	lines(RiverTS90,type="l",col="blue") 

x10<- tail(RiverTS,64)                                                    		      
	RiverTS10<- ts(x10,freq=12, start=c(1970,9))  ####Start Data set 3 months earlier                    		      
	length(RiverTS10)                                                                		      
	RiverTS10















   

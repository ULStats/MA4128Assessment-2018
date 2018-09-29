![stock-market-3](https://github.com/DragonflyStats/MA4128Assessment/blob/master/thA7G9EOA8.jpg)
Forecasting is about predicting or estimating future trends or events forecasting is useful 
in a number of settings for example in business and in scientific research. A common forecast in business might be an 
economist trying to estimate future GDP or gross domestic product which is a country's national income. Another common application of forecasting in business is when financial analysts in investment banks try to forecast the movement of stock prices or commodity prices or derivative prices so the banks traders and clients can make money from these movements. the ability to forecast economic or financial movements is for obvious reasons not easy but can be extremely profitable if done correctly. It is important not to make mistakes when forecasting as even the smallest of differences between the forecast and reality could end up costing a firm large sums of money. Another form of forecasting is forecasting the demand for the firms products once again it is very important to get this right as the firm may well be basing production on these forecasts and therefore there costs will be based on the forecast. An incorrect forecast of demand for its products could cost a manufacturing company a significant amount of money. There are different types of forecasting. Some is based on quantitative  methods and others are based on qualitative methods. An example of qualitative forecasting is market research based on the opinions of consumers. Quantitative forecasting is the other type of forecasting that people engage in. Quantitative methods of forecasting use past data to forecast the future.  There are a number of different methods that are included in the quantitative methods these include the average method where predictions of the future are based on an average value of the past. Another method is the seasonal naive approach this method takes account of seasonal changes.          
======================================================================================================
<pre><code>
function mandel(z)
    c = z
    maxiter = 80
    for n = 1:maxiter
        if abs(z) > 2
            return n-1
        end
        z = z^2 + c
    end
    return maxiter
end

function randmatstat(t)
    n = 5
    v = zeros(t)
    w = zeros(t)
    for i = 1:t
        a = randn(n,n)
        b = randn(n,n)
        c = randn(n,n)
        d = randn(n,n)
        P = [a b c d]
        Q = [a b; c d]
        v[i] = trace((P.'*P)^4)
        w[i] = trace((Q.'*Q)^4)
    end
    std(v)/mean(v), std(w)/mean(w)
end
</code></pre>

Item 1 functionname()
Item 2 functionname()
Item 3 functionname()

This is IN "italics"
This is in "bold"
This is in both "bold and Italics" 

Time series forecasting

Time series data are useful when you are forecasting something that is changing over time (e.g., stock prices, sales figures, profits, etc.). Examples of time series data include:
•Daily IBM stock prices
•Monthly rainfall
•Quarterly sales results for Amazon
•Annual Google profits

Anything that is observed sequentially over time is a time series. In this book, we will only consider time series that are observed at regular intervals of time (e.g., hourly, daily, weekly, monthly, quarterly, annually). Irregularly spaced time series can also occur, but are beyond the scope of this book.

When forecasting time series data, the aim is to estimate how the sequence of observations will continue into the future. The following figure shows the quarterly Australian beer production from 1992 to the third quarter of 2008.

The blue lines show forecasts for the next two years. Notice how the forecasts have captured the seasonal pattern seen in the historical data and replicated it for the next two years. The dark shaded region shows 80% prediction intervals. That is, each future value is expected to lie in the dark blue region with a probability of 80%. The light shaded region shows 95% prediction intervals. These prediction intervals are a very useful way of displaying the uncertainty in forecasts. In this case, the forecasts are expected to be very accurate, hence the prediction intervals are quite narrow.

Time series forecasting uses only information on the variable to be forecast, and makes no attempt to discover the factors which affect its behavior. Therefore it will extrapolate trend and seasonal patterns, but it ignores all other information such as marketing initiatives, competitor activity, changes in economic conditions, and so on.

Time series models used for forecasting include ARIMA models, exponential smoothing and structural models. These models are discussed in Chapters 6, 7 and 8.

Predictor variables and time series forecasting

Predictor variables can also be used in time series forecasting. For example, suppose we wish to forecast the hourly electricity demand (ED) of a hot region during the summer period. A model with predictor variables might be of the form


ED= f(current temperature, strength of economy, population,time of day, day of week, error).  
ED=f(current temperature, strength of economy, population,time of day, day of week, error).


The relationship is not exact---there will always be changes in electricity demand that cannot be accounted for by the predictor variables. The “error” term on the right allows for random variation and the effects of relevant variables that are not included in the model. We call this an “explanatory model” because it helps explain what causes the variation in electricity demand.

Because the electricity demand data form a time series, we could also use a time series model for forecasting. In this case, a suitable time series forecasting equation is of the form


ED t+1 =f(ED t ,ED t−1 ,ED t−2 ,ED t−3 ,…,error), 
EDt+1=f(EDt,EDt−1,EDt−2,EDt−3,…,error),
 
where t 
t
 is the present hour, t+1 
t+1
 is the next hour, t−1 
t−1
 is the previous hour, t−2 
t−2
 is two hours ago, and so on. Here, prediction of the future is based on past values of a variable, but not on external variables which may affect the system. Again, the "error" term on the right allows for random variation and the effects of relevant variables that are not included in the model.

There is also a third type of model which combines the features of the above two models. For example, it might be given by


ED t+1 =f(ED t ,current temperature, time of day, day of week, error). 
EDt+1=f(EDt,current temperature, time of day, day of week, error).
 
These types of mixed models have been given various names in different disciplines. They are known as dynamic regression models, panel data models, longitudinal models, transfer function models, and linear system models (assuming f 
f
 is linear). These models are discussed in Chapter 9.

An explanatory model is very useful because it incorporates information about other variables, rather than only historical values of the variable to be forecast. However, there are several reasons a forecaster might select a time series model rather than an explanatory model. First, the system may not be understood, and even if it was understood it may be extremely difficult to measure the relationships that are assumed to govern its behavior. Second, it is necessary to know or forecast the various predictors in order to be able to forecast the variable of interest, and this may be too difficult. Third, the main concern may be only to predict what will happen, not to know why it happens. Finally, the time series model may give more accurate forecasts than an explanatory or mixed model.






























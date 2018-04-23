QuantTools
=================

Gerard Connaughton 

QuantTools is all in one R package designed to enhance quantitative trading modelling. It allows you to download and organize historical market data from multiple sources like Yahoo, Google Finance and IQFeed. Code your trading algorithms in modern c++11 with powerful event driven tick processing API including trading costs and exchange communication latency and transform detailed data seamlessly into R. With the R package you can track all your trades historically.
It was developed by Stanislav Kovalevsky and it offers four main functionalities: Get market data, Store/Retrieve market data, Plot time series data and  Back testing.

## Get market data.
To begin we will need to download daily or intraday data. The below code downloads daily prices (Open, High, Low, Close) for SPY from 1st Jan 2017 to 1st June 2017. 
````
 Generic parameters
library(QuantTools) 
from = '2016-01-01'
to = '2016-06-01'
symbol = 'SPY' 
 Request data
get_iqfeed_data(symbol, from, to) 
````
## Store/Retrieve Market Data
The package makes it easy to store and manage data easily. First you need to setup storage parameters, the parameters are just simply the date and symbol you want to store. The package allows you to add more symbols and dates if there not in storage already. 
It also allows you to store data between specific dates.


## Plot time series data.
The command plot_ts allows you to plot the data which is downloaded and stored as a time series. It can exclude weekends, holidays and overnight gaps. below is some code where a time series is plotted of the first 100 price observations.
 ````
 Retrieve previously stored data
spy = get_iqfeed_data(symbol = 'SPY',
from = '2017-06-01',  to = '2017-06-02',  period = 'tick',  local = TRUE)
 Select the first 100 rows
spy_price = spy[,.(time,price)][1:100] 
 Plot
plot_ts(spy_price)
 ````
[plot of time series](http://www.thertrader.com/wp-content/uploads/2017/06/Rplot.png)


### Backtesting
The final part of this package is its ability to backtest. You can write your own trading strategy in C++ and transfer it into R.
This gives you the advantage to backtest on histerical data and it will give you a report on how the strategy performed and then you can carry out import analysis to check if the strategy needs improvemnt.


### Conclusssion

No statistical analysis can guarantee performance in real trading. It is very important to model your trading idea(simulation/plan) close to real market.  Of course no past performance will guarantee future performance but such mistakes or neglects made in simulation model can and will ruin your trading account sooner you could expect. With QuantTools it became easier than ever to code trading algorithms, filter and organize market data, visualize your data flow on multiple levels of detail.
There is a slight disadvantage as the IQ feed does not deliver real time data to R, which is essential to day trading. If that was ironed out it would be an end to end solution for traders.

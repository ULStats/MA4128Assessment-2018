__Quantmod__
===========================
***Colin Crehan**    14172712*

![fda logo](https://github.com/ULStats/MA4128Assessment-2018/blob/master/AAPL-full.png)



Quantmod is a quantitative financial modelling framework used in R, the statistical programming language.
It allows users to specify, build, trade, and analyse quantitative financial trading strategies. 
The package was designed to help quantitative trader in their development, testing,
and deployment of statistically based trading models. it is an extremely useful package that
has convenient tools for data management and visualization of trading models. An aspiring 
quantitative trader can conveniently investigate and build trading models.

An important attribute of quantmod is it's ability to load financial data from a variety
sources such as 'Yahoo Finance' for stock prices and 'Oanda' for Foreign Exchange rates. 

* getSymbols("GOOGL",src="yahoo")
> [1] "GOOGL" 

The command above for example loads the Google stock price into the workspace. The above 
command can be altered to allow the user to specify the time window for the data they 
are investigating. These prices can then be conveniently plotted using the 'chartSeries'
command. It is worth noting that Quantmod is not just limited to getting stock prices.
Various other commands that can be used are 'getDividends', 'getSplits' and 'getQuote', 
depending on the type of financial data the user requires. The command above produces the
output below and the user can then easily select which prices they desire. On a side note 
the adjusted closing prices shown here are the stock's closing prices on any given day of
trading that has been amended to include any distributions and corporate actions that occurred
at any time prior to the next day's open.

           GOOGL.Open GOOGL.High GOOGL.Low GOOGL.Close GOOGL.Volume GOOGL.Adjusted
2015-04-06     538.84     545.54    535.70      543.95      1685900         543.95
2015-04-07     544.99     550.16    543.59      544.86      1365900         544.86
2015-04-08     546.00     551.50    546.00      548.84      1419300         548.84
2015-04-09     549.21     549.37    541.95      548.02      1618300         548.02
2015-04-10     549.57     549.85    544.98      548.54      1305200         548.54
2015-04-13     547.05     553.27    546.30      548.64      1466300         548.64

Quantmod offers many different ways of illustrating data from histograms and general line 
plots of stock prices. It also offers the option of adding technical indicators.
The command 'addMACD()' adds moving average convergence divergence signals to stock
prices. 'addBBands()' adds Bollinger bands to the stock price plots. These are particularly
useful in building a trading strategy as they allow the trader to see how far the stock 
prices deviates from their moving average. The bands are normally set up two standard
deviations away from the moving average. Bollinger Bands are a highly popular technical
analysis technique. Many traders believe the closer the prices move to the upper band, 
the more overbought the market, and the closer the prices move to the lower band, 
the more oversold the market is. 


Quantmod is particularly useful for implenting different trading strategies as it already 
has several different trading tools built into the program which are quite simple and 
efficient backtesting tools.
Traders find Quantmod favorabe as it also gives them a user friendly way of analyzing 
their trading strategy. 

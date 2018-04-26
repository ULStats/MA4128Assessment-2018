Quantmod R Package
===============
* Shane McInerney
The quantmod package for R is designed to assist the quantitative trader in the development, testing, and deployment of statistically based trading models.

**What quantmod is**
A rapid prototyping environment, where quant traders can quickly and cleanly explore and build trading models.

**What quantmod is not**
A replacement for anything statistical. It has no 'new' modelling routines or analysis tool to speak of. It does now offer charting not currently available elsewhere in R, but most everything else is more of a wrapper to what you already know and love about the language and packages you currently use.

quantmod makes modelling easier by removing the repetitive workflow issues surrounding data management, modelling interfaces, and performance analysis.

**Q**

The most common practise of quantmod can broken inton one of two things. One is to retrieve the data and once the data is retrieved you can begin to analyse the data and finally visualise the data through charts. To get data from quantmod you use "getsSymbol()". For example to retrieve apple data you would use _getSymbol("AAPL")_ using Apple's trading name. Multiple symblos can be acquired my inserting a semicolon after each data, e.g, _getSymbol("AAPL;MSFT")_. That would produce the data for apple and microsoft. As a default it uses yahoo to retrieve data but you can direct it the local or other sources if needed.

For specific dates you can input parameters such as to and from dates. For example,
_getSymbol("AAPL", from"2015-01-01", to"2017-29-05")_ would pull up data from the first of january 2015 to the 29th of may 2017. The dates are in american form.

You can use this data and other packages to things like priciple component analysis or see how the change in Apple for example impacts the change in microsof or other related industries.

Once we have our data things get more interesting. We can use the chartSeries command to produce to display data. 
 _chartSeries("APPL")_ would produce a simple chart showing the volume of money being traded and the a time series plot showing the price of the stock. This is where to quantmod package is powerful. Through simple commands we can produce a visualisation of the stock. We can also add our own custom indicators. For example we can add moving averages to the data. The most commmon would be the _addMACD()_ command which illustrates the moving average convergence divergence.

Other indicators are the bollinger bands which is coded using _addBBands()_. Here, Bollinger Bands will be drawn, or scheduled to be drawn, on the current chart. If draw is either percent or width a new figure will be added to the current TA figures charted. The image below captures a large amount of information, the date, open and close price, and volume of trading for each day.  Finally, the addBBands() call adds Bollinger Bands to the chart.  Informally, this amounts to a line indicating moving average and two lines a standard deviation above and below this moving average. 

![alt text](http://2.bp.blogspot.com/_FsLa1cMTCWU/TCXXjHy-DTI/AAAAAAAAAKI/xj06hvWk3I0/s1600/APPL.png)

Here are more examples of commands that can be used;
+ addExpiry - Add Contract Expiration Bars to Chart and apply options or futures expiration vertical bars to current chart.
e.g "addExpiry(type = "options", lty = "dotted")".

+ addROC - Add Rate Of Change to Chart




#### References
* https://www.quantmod.com/

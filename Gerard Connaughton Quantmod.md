***Gerard Connaughton***

### Quantmod.
* The Quantmod package for R is designed to assist the quantitative trader in the development, testing, 
and deployment of statistically based trading models.
* Quantmod is a rapid prototyping environment, where quant traders can quickly and cleanly explore and build trading models.
* It makes modelling easier by removing the repetitive workflow issues surrounding data management, modelling interfaces,
and performance analysis. 
* It offers charting facilities that is not available elsewhere in R
The features of quantmod are presented in three sections, downloading data, charting, technical indicators and other functions

### Downloading Data

Once the quantmod package is installed and library is loaded, 
run the following command to get the data of apple stock into R.

```
console.getSymbols(‘AAPL’)
```
To see the starting point of the data, type the following command.

```
head(AAPL)
```
From this we get the data from Apple, which includes figures from its open, high,low,close , volume and adjusted figures.

### Visualisation

The beauty of quantmod lies in its ability to visualize the charts.
Type the following command.
```
chartSeries(AAPL, TA=NULL) # this should produce the following chart.
```
[chart](https://www.quantmod.com/gallery/charts/candleChart-black.png)

As you can see we can see the time on the x-axis and prcie on the y-axis. The TA =NULL means that there is no technical analysis done to the graph
There are commands to carry out the technical anysis which breaks down the data into bar charts, histograms. 
Below is some of the code that was used.
```
Apple_closeprice = Cl(AAPL) # We assign the closing price to a new variable called Apple_closeprice.
plot(Apple_closeprice) # Plotting the close price
hist(AAPL[,4]) #This command plots the histogram of closing price of apple stock
hist(NSEI[,4], main = "Apple Close", breaks =25) # Introducing more price ranges.
```
### Technical indicators.

Along with graphing the data we can calculate key financal figures like the moving average convergence divergence signals,, Directional Movement Indicator and Chaiken Money Flo.
Below is some of the code used in them findings.
```
addMACD() # adds moving average convergence divergence signals to the apple stock price
addBBands() # Adds Bollinger bands to the apple stock price.
addCCI() # Add Commodity channel index
addADX() #Add Directional Movement Indicator
addCMF() #Add Chaiken Money Flow
addCMO # Add Chaiken Money Flow
addDEMA # Add Double Exponential Moving Average
```

### Useful Functions.
Quantmod provides functions to explore features of the data frame. 
If we  want to explore whether the data extracted has open price, volume etc it can be easily done here.
There are also functions like getting the returns by day/month, Highest point and an open-high-low-closed chart.
The code for this is below.

```
AAPL ['2007'] #Fetches all Apple’s 2007 OHLC
AAPL ['2008::'] # Apple data, from 2008 onward
dailyReturn(AAPL) # Returns by day
weeklyReturn(AAPL) # Returns by week
monthlyReturn(AAPL) # month, indexed by yearmon  daily,weekly,monthly,quarterly, and yearly
has.Vo(AAPL) # Checks whether the data object has volume
seriesHi(AAPL) # To check the highest point of price.

```
### Conclusion
* The R program which is quite similiar to ***Quantools*** which I discussed in my other topics in the way it handles the data, but ***quantmod*** can explore more technical points and figures and give a broader understanding of the mathematics behind the trading patterns.
* This program would be key to devloping a trading strategy and key points where to enter and exit the market, but it fails to handle testing of them models in historical data and creating a report of performances.

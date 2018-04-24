Sharpe Ratio
=======================
***Colm McNamara (14141027)***

 The Sharpe Ratio is a mathematical method to examine the performance of an investment by adjusting the price. The ratio measures the excess return (or risk premium) per unit of deviation in an investment asset or a trading strategy.

## Sharpe Ratio Uses
![alt text](https://www.markettamer.com/blog/wp-content/uploads/2015/08/Graph-of-Sharpe-Ratio.png "Logo Title Text 1")

 The Sharpe ratio characterizes how well the return of an asset compensates the investor for the risk taken. When comparing two assets versus a common benchmark, the one with a higher Sharpe ratio provides better return for the same risk (or, equivalently, the same return for lower risk). However, like any other mathematical model, it relies on the data being correct.Sharpe ratio is defined as, 
  
![alt text](https://cdn.corporatefinanceinstitute.com/assets/sharpe-ratio.png "Logo Title Text 1")

When examining the investment performance of assets with smoothing of returns (such as with-profits funds) the Sharpe ratio should be derived from the performance of the underlying assets rather than the fund returns.

## History
 In 1952, Arthur D. Roy suggested maximizing the ratio "(m-d)/σ", where m is expected gross return, d is some "disaster level" (a.k.a., minimum acceptable return, or MAR) and σ is standard deviation of returns.
 This rate was edited by Sharpe and a new ratio was used to incorporate risk. In 1966, William F. Sharpe developed what is now known as the Sharpe ratio.[1] Sharpe's 1994 revision acknowledged that the basis of comparison should be an applicable benchmark, which changes with time. After this revision, the definition is:

![alt text](http://www.statpro.com/wp-content/uploads/2012/05/sharpe.png "Logo Title Text 1")


## Strengths and Weaknesses of Sharpe's Ratio
 The main complaint is this ratio relies on the notions that risk equals volatility and that volatility is bad. Simple logic will tell you that the more you reduce volatility, the less likely you are to be able to capture higher returns. But the bigger problem for the Sharpe ratio is that it treats all volatility the same. Basically, the ratio penalizes strategies that have upside volatility (i.e., big positive returns), but those that developed other risk adjusted ratios just don’t think big positive returns should be viewed as a negative thing. The Sharpe ratio has as its principal advantage that it is directly computable from any observed series of returns without need for additional information surrounding the source of profitability. Other ratios such as the bias ratio have recently been introduced into the literature to handle cases where the observed volatility may be an especially poor proxy for the risk inherent in a time-series of observed returns.
An alternative to the Shapre Ratio is the Sortino Ratio, this is just a variation of the sharpe ratio. The Sortino ratio measures the risk-adjusted return of an investment asset, portfolio, or strategy.[1] It is a modification of the Sharpe ratio but penalizes only those returns falling below a user-specified target or required rate of return, while the Sharpe ratio penalizes both upside and downside volatility equally. I will discuss the Sortino Ratio in the next section.

## Alternatives to the Sharpe Ratio
The Sortino ratio is used to score a portfolio's risk-adjusted returns relative to an investment target using downside risk. This is analogous to the Sharpe ratio, which scores risk-adjusted returns relative to the risk-free rate using standard deviation. When return distributions are near symmetrical and the target return is close to the distribution median, these two measure will produce similar results. As skewness increases and targets vary from the median, results can be expected to show dramatic differences.

![alt text](https://i.investopedia.com/inv/dictionary/terms/sortinoratio.gif "Logo Title Text 1")

## Sharpe Ratio Example
For example, let's assume that you expect your stock portfolio to return 12% next year. If returns on risk-free Treasury notes are, say, 5%, and your portfolio carries a 0.06 standard deviation, then from the formula above we can calculate that the Sharpe ratio for your portfolio is:

(0.12 - 0.05)/0.06 = 1.17

This means that for every point of return, you are shouldering 1.17 "units" of risk.

Put another way, if portfolio X generates a 10% return with a 1.25 Sharpe ratio and portfolio Y also generates a 10% return with a 1.00 Sharpe ratio, then X is the better portfolio because it achieves the same return with less risk.

The higher the Sharpe ratio is, the more return the investor is getting per unit of risk. The lower the Sharpe ratio is, the more risk the investor is shouldering to earn additional returns. Thus, the Sharpe ratio ultimately "levels the playing field" among portfolios by indicating which are shouldering excessive risk.

## Sharpe Ratio on Excel
Here is the standard Sharpe ratio equation:

Sharpe ratio = (Mean portfolio return − Risk-free rate)/Standard deviation of portfolio return, or,

S(x) = (rx - Rf) / StandDev(x)

To recreate this formula in Excel, create a time period column and insert values in ascending sequential order (1, 2, 3, 4, etc). Each time period is usually representative of either one month or one year. Then, create a second column next to it for returns and plot those values in the same row as their corresponding time period.

In the third column, list the risk-free return value, which is normally the current returns for U.S. Government Treasury bills. There should be the same value in every row in this column.

A fourth column has the equation for excess return, which is the return minus the risk-free return value. Use the cells in the second and third columns in the equation. Copy this equation into each row for all time periods.

Next, calculate the average of the excess return values in a separate cell. In another open cell, use the =STDEV function to find the standard deviation of excess return. Finally, calculate the Sharpe ratio by dividing the average by the standard deviation. Higher ratios are considered better.

Sharpe ratios can also be calculated using Visual Basic for Applications (VBA) functions. However, you should understand how to use a VBA before attempting to provide Excel arguments for calculating the Sharpe ratio. 


## Conclusion
The Sharpe ratio was used as an early tool use to examine the performance of an investment by adjusting it for its risk. The Sharpe ration is used as a quick tool for investors to check whether or not it is worth their while investing in a stock. There are more comprehensive formulas that give a better estimate, however the Sharpe ratio is still used today to for a quick valuation.

Performance Analytics
====================
## Description
`PerformanceAnalytics` provides an R package of econometric functions for performance and risk analysis of financial instruments or portfolios. This package aims to aid practitioners and researchers in using the latest research for analysis of both normally and non-normally distributed return streams. This package was created to include functionality that has been appearing in the academic literature on performance analysis and risk over the past several years, but had no functional equivalent in R. In general, this package requires return (rather than price) data. Almost all of the functions will work with any periodicity, from annual, monthly, daily, to even minutes and seconds, either regular or irregular. 

## Time Series Data
Not all, but many of the measures in this package require time series data. PerformanceAnalytics uses the `xts` package for managing time series data for several reasons. Besides being fast and efficient, `xts` includes functions that test the data for periodicity and draw attractive and readable time-based axes on charts. Another benefit is that `xts` provides compatability with Rmetrics’ timeSeries, `zoo` and other time series classes, such that `PerformanceAnalytics` functions that return a time series will return the results in the same format as the object that was passed in. I myself have used this package in another project for a time series module and found it very useful.

## Performence Analysis
With the the increasing availability of complicated alternative investment strategies to both retail and institutional investors, and the broad availability of financial data, an engaging debate about performance analysis and evaluation is as important as ever. There won’t be one right answer delivered in these metrics and charts. What there will be is an accretion of evidence, organised to assist a decision maker in answering a specific question that is pertinent to the decision at hand. Using such tools to uncover information and ask better questions will, in turn, create a more informed investor.

Performance measurement starts with returns. The more informed a trader is the better, once they can utilise this information. Basic measures of performance tend to treat returns as independent observations. In this case, the entirety of R’s base is applicable to such analysis. Some basic statistics we have collected in `table.Stats` include:
```
mean arithmetic //mean
mean.geometric //geometric mean
mean.stderr //standard error of the mean (S.E. mean)
mean.LCL //lower confidence level (LCL) of the mean
mean.UCL //upper confidence level (UCL) of the mean
quantile //for calculating various quantiles of the distribution
min //minimum return
max //maximum return
range //range of returns
length(R) //number of observations
sum(is.na(R)) //number of NA’s
```
It is often valuable when evaluating an investment to know whether the instrument that you are examining follows a normal distribution. One of the first methods to determine how close the asset is to a normal or log-normal distribution is to visually look at your data. Both `chart.QQPlot` and `chart.Histogram` will quickly give you a feel for whether or not you are looking at a normally distributed return history. Again, I used these two commands when looking at the time series data set that I was using in my other project. They allowed me to get a visual understanding of the series I was examining. Along with this, the Shapiro Wilk Test, `shapiro.test`, also tested to see if the series is normally distributed. This test gives a p-value, if the p value is less than 0.05 we can reject the null hypothesis and say that the residuals the series is not normally distributed. 

Differences between `var` and `SemiVariance` help identify `skewness` in the returns. Skewness measures the degree of asymmetry in the return distribution. Positive skewness indicates that more of the returns are positive, negative skewness indicates that more of the returns are negative. An investor should in most cases prefer a positively skewed asset to a similar (style, industry, region) asset that has a negative skewness.

## Risk Analysis
Many methods have been proposed to measure, monitor, and control the risks of a diversified portfolio. Perhaps a few definitions are in order on how different risks are generally classified. Market Risk is the risk to the portfolio from a decline in the market price of instruments in the portfolio. Liquidity Risk is the risk that the holder of an instrument will find that a position is illiquid, and
will incur extra costs in unwinding the position resulting in a less favorable price for the instrument. In extreme cases of liquidity risk, the seller may be unable to find a buyer for the instrument at all, making the value unknowable or zero. Credit Risk encompasses Default Risk, or the risk that promised payments on a loan or bond will not be made, or that a convertible instrument will not be converted in a timely manner or at all. There are also Counterparty Risks in over the counter markets, such as those for complex derivatives. Tools have evolved to measure all these different components of risk. 

The simplest risk measure in common use is volatility, usually modeled quantitatively with a univariate standard deviation on a portfolio. See `sd.Volatility` or Standard Deviation is an appropriate risk measure when the distribution of returns is normal or resembles a random walk, and may be annualised using `sd.annualized`, or the equivalent function `sd.multiperiod` for scaling to an arbitrary number of periods. Many assets, including hedge funds, commodities, options, and even most common stocks over a sufficiently long period, do not follow a normal distribution. For such common but non-normally distributed assets, a more sophisticated approach than standard deviation/volatility is required to adequately model the risk.

One of the most commonly used and cited measures of the risk/reward tradeoff of an investment or portfolio is the `SharpeRatio`, which measures return over standard deviation. If you are comparing multiple assets using Sharpe, you should use `SharpeRatio.annualized`. One of the newer statistical methods developed for analyzing the risk of financial instruments is `Omega`. Omega analytically constructs a cumulative distribution function, in a manner similar to `chart.QQPlot`, but then extracts additional information from the location and slope of the derived function at the point indicated by the risk quantile that the researcher is interested in. Omega seeks to combine a large amount of data about the shape, magnitude, and slope of the distribution into one method. The academic literature is still exploring the best manner to use Omega in a risk measurement and control process, or in portfolio construction.
## Example
```
data(edhec)
# EWMA estimation
# 'as.mat = F' would speed up calculations in higher dimensions
sigma <- M2.ewma(edhec, 0.94)
m3 <- M3.ewma(edhec, 0.94)
m4 <- M4.ewma(edhec, 0.94)
# compute equal-weighted portfolio modified ES
mu <- colMeans(edhec)
p <- length(mu)
ES(p = 0.95, portfolio_method = "component", weights = rep(1 / p, p), mu = mu,
sigma = sigma, m3 = m3, m4 = m4)
# compare to sample method
sigma <- cov(edhec)
m3 <- M3.MM(edhec)
m4 <- M4.MM(edhec)
ES(p = 0.95, portfolio_method = "component", weights = rep(1 / p, p), mu = mu,
sigma = sigma, m3 = m3, m4 = m4)
plot(edhec)
```
## Results
```
$MES
[1] 0.03593744

$contribution
 [1]  0.0079979527 -0.0023398485  0.0040806253  0.0079165121  0.0007909966
 [6]  0.0039465684  0.0048861335  0.0008662255  0.0041314124  0.0012537442
[11]  0.0039907892 -0.0058159612  0.0042322857

$pct_contrib_MES
 [1]  0.22255212 -0.06510894  0.11354804  0.22028595  0.02201038  0.10981775
 [7]  0.13596222  0.02410371  0.11496124  0.03488686  0.11104825 -0.16183573
[13]  0.11776816

$MES
[1] 0.03241585

$contribution
 [1]  0.0074750513 -0.0028125166  0.0039422674  0.0069376579  0.0008077760
 [6]  0.0037114666  0.0043125937  0.0007173036  0.0036152960  0.0013693293
[11]  0.0037650911 -0.0048178690  0.0033924063

$pct_contrib_MES
 [1]  0.23059863 -0.08676361  0.12161541  0.21402052  0.02491917  0.11449542
 [7]  0.13303965  0.02212817  0.11152864  0.04224258  0.11614968 -0.14862694
[13]  0.10465269
```
![Plot2](https://github.com/ULStats/MA4128Assessment-2018/blob/master/plot2.png)

## References
https://cran.r-project.org/web/packages/PerformanceAnalytics/PerformanceAnalytics.pdf

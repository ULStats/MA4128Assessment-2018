__Portfolio Optimization with R__ 
===================================
***by Colin Boland - 12032875***

## Introduction

Portfolio optimization is the process of choosing the proportions of various assets to be held in a portfolio, in such a way as to make the portfolio better than any other according to some criterion. The criterion will combine, directly or indirectly, considerations of the expected value of the portfolio's rate of return as well as of the return's dispersion and possibly other measures of financial risk.

Modern portfolio theory was pioneered by Harry Markowitz in 1952 and led him to being awarded the Nobel Prize in Economics in 1990. The theory assumes that an investor wants to maximize a portfolio's expected return contingent on any given amount of risk, with risk measured by the standard deviation of the portfolio's rate of return. For portfolios that meet this criterion, known as **efficient portfolios**, achieving a higher expected return requires taking on more risk, so investors are faced with a trade-off between risk and expected return. 

This risk-expected return relationship of efficient portfolios is graphically represented by a curve known as the **efficient frontier**. All efficient portfolios, each represented by a point on the efficient frontier, are well-diversified. For the specific formulas for efficient portfolios, see Portfolio separation in mean-variance analysis. While ignoring higher moments can lead to significant over-investment in risky securities, especially when volatility is high, the optimization of portfolios when return distributions are non-Gaussian is mathematically challenging.


## Coding

First, install the package tseries:
``install.packages("tseries")``

The function of interest is `portfolio.optim()`. I decided to write my own function to enter in a vector of tickers, start and end dates for the dataset, min and max weight constraints and short-selling constraints. This function first processes the data and then passes it to portfolio.optim to determine the minimum variance portfolio for a given level of return. It then cycles through increasingly higher returns to check how high the Sharpe ratio can go.

minVarPortfolio= function(tickers,start='2000-01-01',end=Sys.Date(),
riskfree=0,short=TRUE,lowestWeight=-1,highestWeight=1){

```
# Load up the package
library(TSA)
```
#Initialize all the variables we will be using. returnMatrix is 
#initailized as a vector,with length equal to one of the input 
#ticker vectors (dependent on the start and end dates).
#Sharpe is set to 0. The weights vector is set equal in 
#length to the number of tickers. The portfolio is set to 
#NULL. A 'constraint' variable is created to pass on the 
#short parameter to the portfolio.optim function. And vectors 
#are created with the low and high weight restrictions, which
#are then passed to the portfolio.optim function as well. ##


```
returnMatrix=vector(length=length(getSymbols(tickers[1],
auto.assign=FALSE,from=start,to=end)))
sharpe=0
weights=vector(,length(tickers))
port=NULL
constraint=short
lowVec=rep(lowestWeight,length(tickers))
hiVec=rep(highestWeight,length(tickers))
```

#This is a for-loop which cycles through the tickers, calculates 
#their return, and stores the returns in a matrix, adding 
#the return vector for each ticker to the matrix

```
   for(i in 1:length(tickers)){
	temp=getSymbols(tickers[i],auto.assign=FALSE,from=start,to=end)
	if(i==1){
	returnMatrix=diff(log(Ad(temp)))
	}
	else{
	returnMatrix=cbind(returnMatrix,diff(log(Ad(temp))))
	}
    }
    returnMatrix[is.na(returnMatrix)]=0
    it
```

This for-loop cycles through returns to test the portfolio.optim function for the highest Sharpe ratio. Stores the log of the return in retcalc and tries to see if the specified return from retcalc can result in an efficient portfolio.
 

```
for(j in 1:100){
	retcalc=log((1+j/100))
	retcalc=retcalc/252
	print(paste("Ret Calc:",retcalc))
	try(port<-portfolio.optim(returnMatrix,pm=retcalc,shorts=constraint,
		reslow=lowVec,reshigh=hiVec,riskfree=riskfree),silent=T)
```
If the portfolio exists, it is compared against previous portfolios for different returns using the #Sharpe ratio. If it has the highest Sharpe ratio, it is stored and the old one is discarded.
```
	if(!is.null(port)){
        print('Not Null')
        sd=port$ps
        tSharpe=((retcalc-riskfree)/sd)
        print(paste("Sharpe",tSharpe))

        if(tSharpe>sharpe){
	    sharpe=tSharpe
	    weights=port$pw
	}}

  }
    print(paste('Sharpe:', sharpe))
    print(rbind(tickers,weights))
    return(returnMatrix)
}
```
